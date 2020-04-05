import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import NewNote from './pages/ThankYouNotes/NewNote';
import NewBoredNote from './pages/BoredNotes/NewBoredNotes';
import Notes from './pages/Notes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/thanks/new" component={NewNote} />
                <Route path="/bored/new" component={NewBoredNote} />
                <Route path="/notes" component={Notes} />
            </Switch>
        </BrowserRouter>
    );
}