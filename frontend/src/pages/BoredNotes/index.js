import React from 'react';
import { Link } from 'react-router-dom';

import jarImg from '../../assets/jam.png'
import './style.css'

export default function BoredNotes() {
    return (
        <div className="main-jar">
            <h3>Xô Tédio</h3>
            <img className="jarB" src={jarImg} alt="" />

            <Link style={{ textDecoration: 'none' }} className="button buttonjar actionBnotes" to="/bored/new">Ideias</Link>
            <Link style={{ textDecoration: 'none' }} className="button buttonjar listBnotes" to="/bnotes/list">Listar</Link>
        </div>
    );
}