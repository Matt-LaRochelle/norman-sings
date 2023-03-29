import React from 'react';
import styles from './Contact.module.css';
import N6 from '../images/N6.jpg'

function Contact() {
    return (
        <div>
            <div className={styles.grid}>
                <div className={styles.gridItem1}>
                    <img className={styles.img} src={N6} />
                </div>
                <div className={styles.gridItem2}>
                    <form className={styles.container}>
                        <div className={styles.name}>
                            <input type="text" placeholder="First Name" name="first_name"></input>
                            <input type="text" placeholder="Last Name" name="last_name"></input>
                        </div>
                        <div className={styles.content}>
                            <input type="email" placeholder="Email" name="email"></input>
                            <input type="text" placeholder="Subject" name="subject"></input>
                            <textarea rows="8" cols="80" placeholder="Message" className={styles.message} name="message"></textarea>
                            <button className={styles.btn} type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;