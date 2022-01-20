import React from "react";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getUserInfo} from "@/store/actions";
import Layout from "@/pages/layout";
import Login from "@/pages/login";
import storage from '@/utils/storage';

class Router extends React.Component {
    render() {
        const {role, getUserInfo} = this.props
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route
                        path="/"
                        render={() => {
                            if (!storage.getToken()) {
                                return <Redirect to="/login"/>;
                            } else {
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
