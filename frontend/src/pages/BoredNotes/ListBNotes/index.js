import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../../services/api';
import { FiPower } from 'react-icons/fi';

export default function ListBNotes() {
    const [bnotes, setBNotes] = useState([]);
    const history = useHistory();
    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        api.get('profilebnotes', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {
            setBNotes(response.data)
        })
    }, [userId]);

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <span>Bem vinda, {userName}</span>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Bored Notes</h1>

            <ul>
                {bnotes.map(bnote => (
                    <li key={bnote.id}>
                        <strong>Nota:</strong>
                        <p>{bnote.note}</p>

                        <strong>Data</strong>
                        <p>{bnote.date}</p>
                    </li>
                ))}

            </ul>
        </div>
    );

}