import React from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import Logout from "../../containers/Auth/Logout/Logout";
import CardExampleGroups from "../../containers/Users/Users";

const Private = (props) => {
    return (
        <Switch>
            <Route path="/logout" component={Logout}/>
            <Route path="/" component={CardExampleGroups}/>
            <Redirect to="/"/>
        </Switch>
    )
}

export default Private;