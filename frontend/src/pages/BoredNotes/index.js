import React from 'react';
import { Link } from 'react-router-dom';

import jarImg from '../../assets/jam.png'
import './style.css'
import { gsap, TweenMax, Sine, Elastic } from 'gsap';

export default function BoredNotes() {
    const fullJar = document.querySelector(".jarB");
    
    function move() {
         TweenMax.to(fullJar, 0.1, {x:"+=20", yoyo:true, repeat:5});
         TweenMax.to(fullJar, 0.1, {x:"-=20", yoyo:true, repeat:5});
         TweenMax.to(fullJar, 0.1, {x:"+=20", yoyo:true, repeat:5});
    }

    return (
        <div>
            <img className="jarB" src={jarImg} alt="" />

            <Link onClick={move} style={{ textDecoration: 'none' }} className="button actionBnotes" to="/bored/new">Ideias</Link>
            <Link style={{ textDecoration: 'none' }} className="button listBnotes" to="/bnotes/list">Listar</Link>
        </div>
    );
}