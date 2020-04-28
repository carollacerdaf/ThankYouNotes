import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FiPower } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';

import './style.css'

export default function TopBar() {
    const history = useHistory();

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }
    return (
        <Navbar variant="light">
            <Navbar.Brand className="glass-jar-menu">
            </Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Nav inline='true'>
                <Link onClick={handleLogout} to="" type="button">
                    <FiPower size={18} color="#E02041" />
                </Link>
            </Nav>
        </Navbar>
    );
}