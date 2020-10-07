import React from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import Logout from "../../containers/Auth/Logout/Logout";
import Users from "../../containers/Users/Users";

const Private = (props) => {
    return (
        <Switch>
            <Route path="/logout" component={Logout}/>
            <Route path="/" component={Users}/>
            <Redirect to="/"/>
        </Switch>
    )
}

export default Private;