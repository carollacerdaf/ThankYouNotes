import React, { useState, useEffect } from 'react';
import ThankYouNotes from '../ThankYouNotes';
import BoredNotes from '../BoredNotes';
import TopBar from '../TopBar';

import './style.css'
import '../../global.css'
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Notes() {
    const [users, setUsers] = useState([]);
    const userName = localStorage.getItem('userName');

    useEffect(() => {
        api.get('users').then(response => {
            setUsers(response.data)
        })
    });
    return (
        <div className="profile-container">
            <TopBar></TopBar>
            <header>
                <h4>Bem vindo(a) {userName} !</h4>
            </header>
            <div className="jar-container">
                <ThankYouNotes />
                <BoredNotes />
            </div>
            <div>Usuários</div>
            {users.map(user => (
                <Link to={{pathname: `profile/${user.id}`}}>{user.name}</Link>
                ))}

        </div>

    );
}