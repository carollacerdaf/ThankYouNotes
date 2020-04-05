import React from 'react';
import ThankYouNotes from '../ThankYouNotes';
import BoredNotes from '../BoredNotes';
import TopBar from '../TopBar';

import './style.css'
import '../../global.css'

export default function Notes() {
    const userName = localStorage.getItem('userName');
    return (
        <div>
            <TopBar></TopBar>
            <section>
                <h4>Bem vindo(a) {userName} !</h4>
            </section>
            <div className="jar-container">
                <ThankYouNotes />
                <BoredNotes />
            </div>
        </div>

    );
}