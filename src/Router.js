import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Chats from "./components/Chats";
import Profile from "./components/Profile";

export default function Router() {
    return (

        <BrowserRouter>
            <Link to="/profile">Profile</Link>
            <Link to="/chats">chats</Link>

            <Switch>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route exact path="/chats">
                    <Chats/>
                </Route>
                <Route path="/chats/:chatId">
                    <Chats/>
                </Route>
            </Switch>
        </BrowserRouter>

    )
}