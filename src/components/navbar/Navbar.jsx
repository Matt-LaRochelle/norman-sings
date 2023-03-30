import React from "react";
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <header className={styles.navbar}>
            <div>
            <h2 className={styles.title}>Norman Espinoza,</h2>
            <p className={styles.bass}>Bass</p>
            </div>
            
            <nav>
                <ul className={styles.menu}>
                    <li className={styles.li}>
                        <NavLink 
                        to="/"
                        style={({ isActive, isPending }) => {
                            return {
                            textDecoration: isActive ? "underline" : "inherit",
                            };
                        }}
                        className={({ isActive, isPending }) => {
                            return isActive ? "active" : isPending ? "pending" : "";
                        }}
                        >Home</NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink 
                        to="/about"
                        style={({ isActive, isPending }) => {
                            return {
                            textDecoration: isActive ? "underline" : "inherit",
                            };
                        }}
                        className={({ isActive, isPending }) => {
                            return isActive ? "active" : isPending ? "pending" : "";
                        }}
                        >About</NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink 
                        to="/resume"
                        style={({ isActive, isPending }) => {
                            return {
                            textDecoration: isActive ? "underline" : "inherit",
                            };
                        }}
                        className={({ isActive, isPending }) => {
                            return isActive ? "active" : isPending ? "pending" : "";
                        }}
                        >Resume</NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink 
                        to="/media"
                        style={({ isActive, isPending }) => {
                            return {
                            textDecoration: isActive ? "underline" : "inherit",
                            };
                        }}
                        className={({ isActive, isPending }) => {
                            return isActive ? "active" : isPending ? "pending" : "";
                        }}
                        >Media</NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink 
                        to="/contact"
                        style={({ isActive, isPending }) => {
                            return {
                            textDecoration: isActive ? "underline" : "inherit",
                            };
                        }}
                        className={({ isActive, isPending }) => {
                            return isActive ? "active" : isPending ? "pending" : "";
                        }}
                        >Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;