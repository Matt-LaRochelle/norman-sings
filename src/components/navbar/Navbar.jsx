import React from "react";
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className={styles.navbar}>
            <h2 className={styles.title}>Norman Espinoza</h2>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link to="/media">Media</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;