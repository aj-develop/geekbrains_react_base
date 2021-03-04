import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Chats from "./components/Chats";
import {ROUTES} from "./utils/constants";

export default function Router() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path={ROUTES.profileDetails}>
                    <Chats/>
                </Route>
                <Route exact path="/">
                    <Chats/>
                </Route>
                <Route exact path={ROUTES.chats}>
                    <Chats/>
                </Route>
                <Route path={ROUTES.chatDetails}>
                    <Chats/>
                </Route>
            </Switch>
        </BrowserRouter>

    )
}