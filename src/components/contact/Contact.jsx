import React from 'react';
import styles from './Contact.module.css';

function Contact() {
    return (
        <div>
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
    );
}

export default Contact;