import React from 'react';
import ThankYouNotes from '../ThankYouNotes';
import BoredNotes from '../BoredNotes';
import TopBar from '../TopBar';

import './style.css'
import '../../global.css'

export default function Notes() {
    const userName = localStorage.getItem('userName');
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
        </div>

    );
}