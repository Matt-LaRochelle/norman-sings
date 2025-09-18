import React from 'react';
import styles from './Contact.module.css';
import N6 from '../images/Headshot2rs.webp';
import emailjs from 'emailjs-com';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_q2lwrpk', 'template_1u8hncq', e.target, 'glIU5aKO-dstGXEV2')
          .then((result) => {
              console.log(result.text);
              alert("Your message has been sent.")
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <div>
            <h1>Contact</h1>
            <div className={styles.grid}>
                <div className={styles.gridItem2}>
                    <form className={styles.container} onSubmit={sendEmail}>
                        <div className={styles.name}>
                            <input type="text" placeholder="First Name" name="first_name" required></input>
                            <input type="text" placeholder="Last Name" name="last_name" required></input>
                        </div>
                        <div className={styles.content}>
                            <input type="email" placeholder="Email" name="email" required></input>
                            <input type="text" placeholder="Subject" name="subject" required></input>
                            <textarea rows="8" cols="80" placeholder="Message" className={styles.message} name="message" required></textarea>
                            <button className={styles.btn} type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className={styles.gridItem1}>
                    <img className={styles.img} src={N6} alt="Headshot of Norman Espinoza" />
                </div>
            </div>
        </div>
    );
}

export default Contact;