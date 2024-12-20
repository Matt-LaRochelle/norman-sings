import React from 'react';
import styles from './Card.module.css';

function Card(props) {
    return (
        <div className={styles.container}>
            <h3 className={styles.h3}><em>{props.opera},</em> {props.role}</h3>
            <a className={props.link ? styles.a : styles.a2} href={props.link} target="_blank">{props.company}</a>
            <img className={styles.img} src={props.image} />
            <ul className={styles.ul}>
                {props.performances.map((performance) => {
                    return <li className={styles.li}>{performance}</li>
                })}
            </ul>
            <p className={styles.p}>{props.location}</p>
        </div>  
    );
}

export default Card;