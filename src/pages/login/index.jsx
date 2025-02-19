import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {Form, Icon, Input, Button, message, Spin} from "antd";
import {connect} from "react-redux";
import DocumentTitle from "react-document-title";
import "./index.less";
import {login, getUserInfo} from "@/store/actions";
import storage from '@/utils/storage';


const Login = (props) => {
    const {form, login, getUserInfo} = props;
    const {getFieldDecorator} = form;
    const [loading, setLoading] = useState(false);

    const handleLogin = (username, password) => {
        // 登录完成后 发送请求 调用接口获取用户信息
        setLoading(true);
        login(username, password)
            .then((data) => {
                storage.setToken('123121')
                message.success("登录成功");
                handleUserInfo();
            })
            .catch((error) => {
                setLoading(false);
                message.error(error);
                console.log('error'+error);

            });
    };

    // 获取用户信息
    const handleUserInfo = () => {
        console.log('handleUserInfo')
        getUserInfo()
            .then((data) => {
            })
            .catch((error) => {
                message.error(error);
            });
    };

    const handleSubmit = (event) => {
        // 阻止事件的默认行为
        event.preventDefault();

        // 对所有表单字段进行检验
        form.validateFields((err, values) => {
            // 检验成功
            if (!err) {
                const {username, password} = values;
                handleLogin(username, password);
            } else {
                console.log("检验失败!");
            }
        });
    };

    if (storage.getToken()) {
        return <Redirect to="/dashboard"/>;
    } else {
        return (
            <DocumentTitle title={"用户登录"}>
                <div className="login-container">
                    <Form onSubmit={handleSubmit} className="content">
                        <div className="title">
                            <h2>用户登录</h2>
                        </div>
                        <Spin spinning={loading} tip="登录中...">
                            <Form.Item>
                                {getFieldDecorator("username", {
                                    rules: [
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "请输入用户名",
                                        },
                                    ],
                                    initialValue: "admin", // 初始值
                                })(
                                    <Input
                                        prefix={
                                            <Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>
                                        }
                                        placeholder="用户名"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator("password", {
                                    rules: [
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "请输入密码",
                                        },
                                    ],
                                    initialValue: "123456", // 初始值
                                })(
                                    <Input
                                        prefix={
                                            <Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>
                                        }
                                        type="password"
                                        placeholder="密码"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                >
                                    登录
                                </Button>
                            </Form.Item>
                        </Spin>
                    </Form>
                </div>
            </DocumentTitle>
        );
    }
};

const WrapLogin = Form.create()(Login);

export default connect((state) => state.user, {login, getUserInfo})(
    WrapLogin
);
