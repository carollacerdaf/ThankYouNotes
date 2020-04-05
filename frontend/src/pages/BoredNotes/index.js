import React from 'react';
import { Link } from 'react-router-dom';

export default function BoredNotes() {
    return (
        <div>
            <h2>POTE Bored</h2>

            <Link className="button" to="/bored/new">Ideias</Link>
        </div>
    );
}