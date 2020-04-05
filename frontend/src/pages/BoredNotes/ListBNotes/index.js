import React from 'react';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../../services/api';
import { FiArrowLeft } from 'react-icons/fi';

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
                <section>
                    <Link className="back-link" to="/notes">
                        <FiArrowLeft size={16} color="#ff6f69" />
                    Voltar à home
                </Link>
                </section>
                <h1>Notas Xô Tédio</h1>
            </header>
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