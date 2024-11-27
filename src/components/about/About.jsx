import React from 'react';
import styles from './About.module.css';
import Card from '../card/Card';
import Card_p from '../card/Card_p';
import n1 from '../images/n1.jpg';
import upcoming_cards from '../upcoming_cards.js';
import prev23 from '../2023.js';
import prev22 from '../2022.js';
import prev21 from '../2021.js';
import prev19 from '../2019.js';
import prev18 from '../2018.js';

function About() {
    return (
        <div>
            <h1 className={styles.h1}>About</h1>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.p}>Norman Espinoza, a Bass originally from San José California, has performed internationally and with numerous opera companies around the country. He is a graduate from San José State University where he obtained both his M.M. and B.M. in Vocal Performance.</p>
                    <p className={styles.p}>Recognized for his powerful low notes, he has sung for Opera San José, Livermore Valley Opera, Lyric Opera Orange County, Opera Las Vegas, Opera Modesto, Berlin Opera Academy, Montefeltro Music Festival in Italy, and was recently a Chrisman Studio Artist for Opera Santa Barbara.</p>
                    <p className={styles.p}>Roles Norman has sung include: Colline, Alidoro, Mustafà, Reverend Hale, Leporello, Il Commendatore, Sparafucile, Bartolo, Dr Grenvil, Seneca and Sarastro to name a few.</p>
                    <p className={styles.p}>Off the opera stage, Norman sings recitals/new works and is a Grammy nominated singer with his collaborated album Long These Days composed by Jennifer Bellor. Their 4 Spanish songs cycle Cuatro Canciones de las Últimas Horas is being considered for Best Contemporary Classical Composition for 2024.</p>
                    <p className={styles.p}>Norman now resides in Las Vegas, Nevada with his wife/new born son and works closely with Opera Las Vegas. He's also a Gondolier Singer for the Venetian Resort and he would love to take you on a ride on his gondola in Las Venice!</p>
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

            <h2 className={styles.h2}>Previous Performances:</h2>
            <h3 className={styles.h3}>2023</h3>
            <div className={styles.previous_container}>
                {prev23.map((card) => {
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

            <h3 className={styles.h3}>2022</h3>
            <div className={styles.previous_container}>
                {prev22.map((card) => {
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

            <h3 className={styles.h3}>2021</h3>
            <div className={styles.previous_container}>
                {prev21.map((card) => {
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

            <h3 className={styles.h3}>2019</h3>
            <div className={styles.previous_container}>
                {prev19.map((card) => {
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

            <h3 className={styles.h3}>2018</h3>
            <div className={styles.previous_container}>
                {prev18.map((card) => {
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

        </div>
    );
}

export default About;