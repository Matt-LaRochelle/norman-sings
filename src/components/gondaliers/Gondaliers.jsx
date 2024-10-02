import React from 'react';
import styles from './Gondaliers.module.css';
import gondalier from '../images/gondalier.jpg';


function About() {
    return (
        <div>
            <h1 className={styles.h1}>Gondaliers</h1>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className={styles.p}>Iaculis sagittis non id viverra lacinia. Natoque parturient ad, urna justo blandit rhoncus. Netus consequat maximus eget ligula ultrices rhoncus nisl. Pretium purus condimentum leo facilisi inceptos quam sed lobortis.</p>
                </div>
                <div className={styles.picture}>
                    <img className={styles.img} src={gondalier} />
                    <p className={styles.img_label}>Gondalier Rides, Las Vegas, NV</p>
                </div>
            </div>
            

        </div>
    );
}

export default About;