import React from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import Logout from "../../containers/Auth/Logout/Logout";
import Users from "../../containers/Users/Users";

const Private = () => {
    return (
        <Switch>
            <Route path="/logout" exact component={Logout}/>
            <Route path="/" exact component={Users}/>
            <Redirect to="/"/>
        </Switch>
    )
}

export default Private;