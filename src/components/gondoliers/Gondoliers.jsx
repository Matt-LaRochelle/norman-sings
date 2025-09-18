import React from 'react';
import styles from './Gondoliers.module.css';
import gondolier from '../images/gondolars.webp';


function About() {

    const handleClick = () => {
        window.open('https://popl.co/card/UXGRv0oe/1/s', '_blank');
    }

    return (
        <div>
            <h1>Gondola</h1>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.p}>Besides being an international opera singer, Norman is also a gondolier at The Venetian Resort in Las Vegas Nevada. He works 5 days a week sharing his voice with his guests and giving them a beautiful experience. He works both on the inside and the outside ride and would love for you to come join him on his gondola.</p>
                    <p className={styles.p}>If you were already one of his guests, feel free to follow him on any of his social media platforms. He would also appreciate any gratuity you would like to provide him for the wonderful experience.. (Link below)</p>
                    <button className={styles.btn} onClick={handleClick}>Gratuity</button>
                    <p className={styles.p}>Thank you for taking a ride and looking forward to your return!</p>
                </div>
                <div className={styles.picture}>
                    <img className={styles.img} src={gondolier} alt="Gondolier at The Venetian Resort" />
                    <p className={styles.img_label}>Gondola Ride, Las Vegas, NV</p>
                </div>
            </div>
        </div>
    );
}

export default About;