import React, { useState } from "react";
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        window.open('https://popl.co/card/UXGRv0oe/1/s', '_blank');
        setNav(false);
    }

    return (
        <header className={styles.navbar}>
            <div>
            <h2 className={styles.title}>Norman Espinoza</h2>
            <p className={styles.bass}>Bass</p>
            </div>
            
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li className={styles.li}>
                        <NavLink 
                        to="/"
                        onClick={()=> setNav(false)}
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
                        onClick={()=> setNav(false)}
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
                        onClick={()=> setNav(false)}
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
                        onClick={()=> setNav(false)}
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
                        onClick={()=> setNav(false)}
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
                    <li className={styles.li}>
                        <button className={styles.btn} onClick={handleClick}>Donate</button>
                    </li>
                </ul>
            </nav>
            <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
        </header>
    );
}

export default Navbar;