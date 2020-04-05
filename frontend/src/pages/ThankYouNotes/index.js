import React from 'react';
import { Link } from 'react-router-dom';

export default function ThankYouNotes() {
    return (
        <div>
            <h2>POTE</h2>

            <Link className="button" to="/thanks/new">Agradecer</Link>
        </div>
    );
}