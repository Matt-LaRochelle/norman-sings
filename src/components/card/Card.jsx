import React from 'react';
import styles from './Card.module.css';
import olv from '../olv.webp'

function Card() {
    return (
        <div className={styles.container}>
            <h3 className={styles.h3}><em>La Traviata,</em> Dottore Grenvil</h3>
            <a className={styles.a} href="https://operalasvegas.com/productions/la-traviata/">Opera Las Vegas</a>
            <img className={styles.img} src={olv} />
            <ul>
                <li className={styles.li}>June 9th 7:30pm</li>
                <li className={styles.li}>June 11th 2:00pm</li>
            </ul>
            <p className={styles.p}>Las Vegas, Nevada</p>
        </div>
    );
}

export default Card;