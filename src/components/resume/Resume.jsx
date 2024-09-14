import React from 'react';
import styles from './Resume.module.css';
import n2 from '../images/N2.jpg';
import n3 from '../images/N3.png';
import nh from '../images/Norman Espinoza Headshot.jpg';
import nr from '../images/Norman Opera Resume 2022 Fall.pdf';

function Resume() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.nPhoto}>
                    <img className={styles.img} src={n2} />
                    <a href={nh} download><button className={styles.btn}>Download Headshot</button></a>
                </div>
                <div className={styles.nResume}>
                    <img className={styles.img} src={n3} />
                    <a href={nr} download><button className={styles.btn}>Download Resume</button></a>
                </div>
            </div>
            <div className={styles.prep}>
                <h1>Roles Prepared:</h1>
                <ul className={styles.ul}>
                    <li className={styles.li}><span className={styles.left}>Bizet</span><span className={styles.center}><em>Carmen</em></span><span className={styles.right}>Zuniga</span></li>
                    <li className={styles.li}><span className={styles.left}>Cavalli</span><span className={styles.center} ><em>Ormindo</em></span><span className={styles.right}>Hariadeno</span></li>
                    <li className={styles.li}><span className={styles.left}>Frank</span><span className={styles.center} ><em>Letters to Lily</em></span><span className={styles.right}>Frank</span></li>
                    <li className={styles.li}><span className={styles.left}>Handel</span><span className={styles.center} ><em>Semele</em></span><span className={styles.right}>Somnus/Cadmus</span></li>
                    <li className={styles.li}><span className={styles.left}>Menotti</span><span className={styles.center}><em>Amahl and the Night Visitors</em></span><span className={styles.right}>King Balthazar</span></li>
                    <li className={styles.li}><span className={styles.left}>Menotti</span><span className={styles.center}><em>The Consul</em></span><span className={styles.right}>Mr. Kofner</span></li>
                    <li className={styles.li}><span className={styles.left}>Monteverdi</span><span className={styles.center}><em>L'incoronazione di Poppea</em></span><span className={styles.right}>Seneca</span></li>
                    <li className={styles.li}><span className={styles.left}>Mozart</span><span className={styles.center}><em>Don Giovanni</em></span><span className={styles.right}>Il Commendatore</span></li>
                    <li className={styles.li}><span className={styles.left}>Mozart</span><span className={styles.center}><em>Don Giovanni</em></span><span className={styles.right}>Leporello</span></li>
                    <li className={styles.li}><span className={styles.left}>Mozart</span><span className={styles.center}><em>Die Zauberflöte</em></span><span className={styles.right}>Sarastro</span></li>
                    <li className={styles.li}><span className={styles.left}>Mozart</span><span className={styles.center}><em>Le Nozze di Figaro</em></span><span className={styles.right}>Dr. Bartolo</span></li>
                    <li className={styles.li}><span className={styles.left}>Mozart</span><span className={styles.center}><em>Le Nozze di Figaro</em></span><span className={styles.right}>Antonio</span></li>
                    <li className={styles.li}><span className={styles.left}>Puccini</span><span className={styles.center}><em>Gianni Schicchi</em></span><span className={styles.right}>Simone</span></li>
                    <li className={styles.li}><span className={styles.left}>Puccini</span><span className={styles.center}><em>La Bohème</em></span><span className={styles.right}>Colline</span></li>
                    <li className={styles.li}><span className={styles.left}>Puccini</span><span className={styles.center}><em>La Rondine</em></span><span className={styles.right}>Crebillon</span></li>
                    <li className={styles.li}><span className={styles.left}>Puccini</span><span className={styles.center}><em>Tosca</em></span><span className={styles.right}>Il Sagrestano</span></li>
                    <li className={styles.li}><span className={styles.left}>Rossini</span><span className={styles.center}><em>L'italiana in Algeri</em></span><span className={styles.right}>Mustafà</span></li>
                    <li className={styles.li}><span className={styles.left}>Rossini</span><span className={styles.center}><em>La Cenerentola</em></span><span className={styles.right}>Alidoro</span></li>
                    <li className={styles.li}><span className={styles.left}>Strauss</span><span className={styles.center}><em>Die Fledermaus</em></span><span className={styles.right}>Frank</span></li>
                    <li className={styles.li}><span className={styles.left}>Tchaikovsky</span><span className={styles.center}><em>Eugene Onegin</em></span><span className={styles.right}>Gremin</span></li>
                    <li className={styles.li}><span className={styles.left}>Verdi</span><span className={styles.center}><em>Un Ballo in Maschera</em></span><span className={styles.right}>Sam</span></li>
                    <li className={styles.li}><span className={styles.left}>Verdi</span><span className={styles.center}><em>Un Ballo in Maschera</em></span><span className={styles.right}>Tom</span></li>
                    <li className={styles.li}><span className={styles.left}>Verdi</span><span className={styles.center}><em>Otello</em></span><span className={styles.right}>Lodovico</span></li>
                    <li className={styles.li}><span className={styles.left}>Verdi</span><span className={styles.center}><em>Otello</em></span><span className={styles.right}>Montano</span></li>
                    <li className={styles.li}><span className={styles.left}>Verdi</span><span className={styles.center}><em>Rigoletto</em></span><span className={styles.right}>Sparafucile</span></li>
                    <li className={styles.li}><span className={styles.left}>Verdi</span><span className={styles.center}><em>La Traviata</em></span><span className={styles.right}>Dottore Grenvil</span></li>
                    <li className={styles.li}><span className={styles.left}>Ward</span><span className={styles.center}><em>The Crucible</em></span><span className={styles.right}>Reverend Hale</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;