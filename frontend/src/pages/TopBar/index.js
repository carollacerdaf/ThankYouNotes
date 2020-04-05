import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { FiPower } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';

import jarImg from '../../assets/earth-in-a-glass-jar.png'
import './style.css'

export default function TopBar() {
    const history = useHistory();

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand className="glass-jar-menu">
            </Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Nav inline>
                <Link onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </Link>
            </Nav>
        </Navbar>
    );
}