import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../../services/api';
import { FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import moment from 'moment';

export default function ListBNotes() {
    const [bnotes, setBNotes] = useState([]);
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

    async function handleDeleteNote(id) {
        try {
            await api.delete(`borednotes/${id}`, {
                headers: {
                    Authorization: userId,
                }
            });

            setBNotes(bnotes.filter(bnotes => bnotes.id != id));
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
                <h1>Notas Xô Tédio</h1>
            </header>
            <ul>
                {bnotes.map(bnote => (
                    <li key={bnote.id}>
                        <strong>Nota:</strong>
                        <p>{bnote.note}</p>

                        <strong>Data</strong>
                        <p>{moment(bnote.date).format('DD/MM/YYYY')}</p>

                        <button onClick={() => handleDeleteNote(bnote.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    );

}