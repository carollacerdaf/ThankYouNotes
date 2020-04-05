import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../../services/api';

import './style.css';
import gladImg from '../../../assets/smiley.png'

export default function NewNote() {
    const [note, setNote] = useState('');
    const [date, setDate] = useState('');
    const userId = localStorage.getItem('userId');

    const history = useHistory();

    async function handleTNote(e) {
        e.preventDefault();
        const data = { note, date };

        try {
            const response = await api.post('/thanknotes', data, {
                headers: {
                    Authorization: userId,
                }
            });
            alert('Cadastrado!');
            history.push('/notes');
        } catch (err) {
            alert('Erro');
        }
    }
    return (
        <div className="new-note-container">
            <section>
                <Link className="back-link" to="/notes">
                    <FiArrowLeft size={16} color="#ff6f69" />
                Voltar à home
            </Link>
            </section>
            <div className="content">
                <img src={gladImg} alt="Bored Heart" />
                <form onSubmit={handleTNote}>
                    <textarea placeholder="Agradecimento" cols="30" rows="5"
                        value={note}
                        onChange={e => setNote(e.target.value)}></textarea>
                    <input type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} />

                    <button className="sendTButton" type="submit">Agradecer</button>
                </form>
            </div>
        </div>
    );
}