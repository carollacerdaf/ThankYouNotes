import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../../services/api';
import moment from 'moment'

import './style.css';
import boredImg from '../../../assets/heart.png'

export default function NewBoredNote() {
    const [note, setNote] = useState('');
    const [date] = useState('');
    const userId = localStorage.getItem('userId');

    const history = useHistory();


    async function handleBNote(e) {
        e.preventDefault();
        const data = { note, date };

        try {
           await api.post('/borednotes', data, {
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

    function getDate() {
        return moment().format('YYYY-MM-DD')
    }

    return (
        <div className="new-note-container">
            <section>
                <Link className="back-link" to="/notes">
                    <FiArrowLeft size={16} color="#ff6f69" />
                    Voltar
                </Link>
            </section>
            <div className="content">
                <img src={boredImg} alt="Bored Heart" />
                <form onSubmit={handleBNote}>
                    <textarea placeholder="Ideia" cols="30" rows="5"
                        value={note}
                        onChange={e => setNote(e.target.value)}></textarea>
                    <input type="date" disabled
                        value={getDate()} />

                    <button className="sendBButton" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}