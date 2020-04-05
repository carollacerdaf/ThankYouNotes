import React from 'react';
import ThankYouNotes from '../ThankYouNotes';
import BoredNotes from '../BoredNotes';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiPower } from 'react-icons/fi';

export default function Notes() {
    const userName = localStorage.getItem('userName');
    return (
        <div>
            <section>
                <button type="button">
                    <FiPower size={18} />
                </button>
                <h1>NOTAS</h1>
                <h2>Bem vindo(a) {userName} !</h2>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar à tela inicial
                </Link>
            </section>
            <div>

                <ThankYouNotes />
                <BoredNotes />
            </div>
        </div>

    );
}