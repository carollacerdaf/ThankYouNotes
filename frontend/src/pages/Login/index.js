import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';
import './style.css'
import { useState } from 'react';
import jarImg from '../../assets/main_jar.jpg'

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
            document.getElementById("idresponse").innerHTML = "Usuário/Senha não encontrado";
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>LogIn</h1>

                    <input name="username" placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                     />
                    <input name="password" type="password" placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                    <button className="button buttonlogin" type="submit">Entrar</button>
                    <p id="idresponse"></p>
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#ff6f69" />
                    Não tenho cadastro
                </Link>
                </form>
                
            </section>
            <section>
                <img className="main-jar" src={jarImg} alt=""/>
            </section>
        </div>
           
    );
}