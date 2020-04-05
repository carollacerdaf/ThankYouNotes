import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';
import './style.css'
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('session', {email, password});

            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', response.data.name);
            localStorage.setItem('userId', response.data.id);
            console.log(response.data)

            history.push('/notes');
        }catch(err){
            alert("Erro");
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                     />
                    <input type="password" placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>
                </form>
            </section>
        </div>
    );
}