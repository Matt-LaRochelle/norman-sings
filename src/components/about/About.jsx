import React from 'react';
import styles from './About.module.css';
import Card from '../card/Card';
import Card_p from '../card/Card_p';
import n1 from '../images/n1.jpg';
import upcoming_cards from '../upcoming_cards.js';
import previous_cards from '../previous_cards.js';



function About() {
    return (
        <div>
            <h1 className={styles.h1}>About</h1>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.p}>Norman Espinoza, a Bass originally from San José California, has performed internationally and with numerous opera companies around the country. He is a graduate from San José State University where he obtained both his M.M. and B.M. in Vocal Performance. </p>
                    {/* <p className={styles.p}>Recognized for his powerful low notes, he has sung for Opera San José, Lyric Opera Orange County, Opera Las Vegas, Berlin Opera Academy, Montefeltro Music Festival in Italy, and is currently a Chrisman Studio Artist for Opera Santa Barbara for their 2021-2022 season. </p>
                    <p className={styles.p}>Roles Norman has sung include: Colline, Alidoro, Reverend Hale, Il Commendatore, Sparafucile, Leporello, Bartolo, Seneca and Sarastro to name a few.</p> */}
                    <p className={styles.p}>Norman now resides in Las Vegas, Nevada with his wife and and works closely with Opera Las Vegas. He also is a Gondolier Singer for the Venetian Resort and he would love take you on a ride on his gondola in Las Venice!</p>
                </div>
                <div className={styles.picture}>
                    <img className={styles.img} src={n1} />
                    <p className={styles.img_label}>Al Ringling Theatre @ Baraboo, WI</p>
                </div>
            </div>
            <h2 className={styles.h2}>Upcoming Performances:</h2>
            <div className={styles.upcoming_container}>
            {upcoming_cards.map((card) => {
                return <Card 
                opera={card.opera}
                role={card.role}
                link={card.link}
                company={card.company}
                performances={card.performances}
                location={card.location}
                image={card.image}
            />
            })}
            </div>

            <h2 className={styles.h2}>Recent Performances:</h2>
            {previous_cards.map((card) => {
                return <Card_p 
                opera={card.opera}
                role={card.role}
                link={card.link}
                company={card.company}
                performances={card.performances}
                location={card.location}
                image={card.image}
            />
            })}

        </div>
    );
}

export default About;