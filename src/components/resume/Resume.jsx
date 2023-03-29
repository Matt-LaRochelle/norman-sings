import React from 'react';
import styles from './Resume.module.css';
import n2 from '../images/N2.jpg';
import n3 from '../images/N3.png';

function Resume() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.nPhoto}>
                    <img className={styles.img} src={n2} />
                    <button className={styles.btn}>Download Headshot</button>
                </div>
                <div className={styles.nResume}>
                    <img className={styles.img} src={n3} />
                    <button className={styles.btn}>Download Resume</button>
                </div>
            </div>
            <div className={styles.prep}>
                <h1>Roles Prepared:</h1>
                <ul className={styles.ul}>
                    <li className={styles.li}>Somnus/Cadmus - Semele (Covered) - Handel</li>
                    <li className={styles.li}>Zuniga - Carmen - Bizet</li>
                    <li className={styles.li}>King Balthazar - Amahl and the Night Visitors - Menotti</li>
                    <li className={styles.li}>Mr. Kofner - The Consul - Menotti</li>
                    <li className={styles.li}>Seneca - L’incoronazione di Poppea - Monteverdi</li>
                    <li className={styles.li}>Il Commendatore - Don Giovanni - Mozart</li>
                    <li className={styles.li}>Leporello - Don Giovanni - Mozart</li>
                    <li className={styles.li}>Sarastro - Die Zauberflöte - Mozart</li>
                    <li className={styles.li}>Antonio - Le Nozze di Figaro - Mozart</li>
                    <li className={styles.li}>Dr. Bartolo - Le Nozze di Figaro - Mozart</li>
                    <li className={styles.li}>Simone - Gianni Schicchi - Puccini</li>
                    <li className={styles.li}>Colline - La Bohéme - Puccini</li>
                    <li className={styles.li}>Mustafà - L’italiana in Algeri - Rossini</li>
                    <li className={styles.li}>Alidoro - La Cenerentola - Rossini</li>
                    <li className={styles.li}>Sam - Un Ballo in Maschera - Verdi</li>
                    <li className={styles.li}>Tom - Un Ballo in Maschera - Verdi</li>
                    <li className={styles.li}>Montano - Otello - Verdi</li>
                    <li className={styles.li}>Sparafucile - Rigoletto - Verdi</li>
                    <li className={styles.li}>Reverend Hale - The Crucible - Ward</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;