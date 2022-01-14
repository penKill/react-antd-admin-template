import React from "react";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getUserInfo} from "@/store/actions";
import Layout from "@/pages/layout";
import Login from "@/pages/login";
import storage from '@/utils/storage';

class Router extends React.Component {
    render() {
        console.log(this.props)
        const {role, getUserInfo} = this.props;
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route
                        path="/"
                        render={() => {
                            if (!storage.getToken()) {
                                console.log('调转')
                                return <Redirect to="/login"/>;
                            } else {
                                console.log('不用调转')
                                if (role) {
                                    return <Layout/>;
                                } else {
                                    getUserInfo().then(() => <Layout/>);
                                }
                            }
                        }}
                    />
                </Switch>
            </HashRouter>
        );
    }
}

export default connect((state) => state.user, {getUserInfo})(Router);
