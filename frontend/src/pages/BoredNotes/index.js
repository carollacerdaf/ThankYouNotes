import React from 'react';
import { Link } from 'react-router-dom';

import jarImg from '../../assets/jam.png'
import './style.css'

export default function BoredNotes() {
    return (
        <div>
            <img src={jarImg} alt=""/>

            <Link className="button actionBnotes" to="/bored/new">Ideias</Link>
            <Link className="button listBnotes" to="/bnotes/list">Listar</Link>
        </div>
    );
}