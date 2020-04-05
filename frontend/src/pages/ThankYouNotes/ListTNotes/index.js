import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../../services/api';
import { FiPower } from 'react-icons/fi';

export default function ListTNotes() {
    const [tnotes, setTNotes] = useState([]);
    const userName = localStorage.getItem('userName');
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

    return (
        <div className="profile-container">      
            <h1>Thank You Notes</h1>

            <ul>
                {tnotes.map(tnote => (
                    <li key={tnote.id}>
                        <strong>Nota:</strong>
                        <p>{tnote.note}</p>

                        <strong>Data</strong>
                        <p>{tnote.date}</p>
                    </li>
                ))}

            </ul>
        </div>
    );

}