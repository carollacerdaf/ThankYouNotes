import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';

import './style.css';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {name,email,password};

        try{
        const response = await api.post('/users', data);

        alert(`Bem vindo(a) ${response.data.name}`);
        history.push('/');
        }catch(err){
            alert('Erro no cadastro , tente novamente');
        }

    }

    return (
        <div>
            <section>
                <h1>Cadastro</h1>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#ff6f69" />
                    Voltar à tela inicial
                </Link>
            </section>

            <form onSubmit={handleRegister}>
                <input
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <input type="email" placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />

                <button className="button listTnotes" type="submit">Cadastrar</button>
            </form>
        </div>
    );
}