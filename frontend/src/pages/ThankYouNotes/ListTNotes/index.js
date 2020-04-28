import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../../services/api';
import { FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import moment from 'moment';

export default function ListTNotes() {
    const [tnotes, setTNotes] = useState([]);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        api.get('profiletnotes', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {
            setTNotes(response.data)
        })
    }, [userId]);

    async function handleDeleteNote(id) {
        try {
            await api.delete(`thanknotes/${id}`, {
                headers: {
                    Authorization: userId,
                }
            });

            setTNotes(tnotes.filter(tnotes => tnotes.id != id));
        } catch (err) {
            alert('Erro ao deletar');
        }
    }

    return (
        <div className="profile-container">
            <header>
                <section>
                    <Link className="back-link" to="/notes">
                        <FiArrowLeft size={16} color="#ff6f69" />
                    Voltar
                </Link>
                </section>
                <h1>Notas de Gratidão</h1>
            </header>

            <ul>
                {tnotes.map(tnote => (
                    <li key={tnote.id}>
                        <strong>Nota:</strong>
                        <p>{tnote.note}</p>

                        <strong>Data</strong>
                        <p>{moment(tnote.date).format('DD/MM/YYYY')}</p>

                        <button onClick={() => handleDeleteNote(tnote.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    );

}