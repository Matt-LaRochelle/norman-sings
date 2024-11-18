import React from 'react';
import styles from './Media.module.css';
import headshot1 from '../images/Headshot1.jpg';
import headshot2 from '../images/Headshot2.jpg';
import headshot3 from '../images/Headshot3.jpg';
import recital1 from '../images/recital1.jpeg';
import fledermaus1 from '../images/Fledermaus1.jpg';
import fledermaus2 from '../images/Fledermaus2.jpg';
import fledermaus3 from '../images/Fledermaus3.jpeg';
import OLVTraviata1 from '../images/OLVTraviata1.jpeg';
import OLVTraviata3 from '../images/OLVTraviata3.jpeg';
import OLVTraviata4 from '../images/OLVTraviata4.jpeg';
import LettersToLilly1 from '../images/LettersToLilly1.jpeg';
import LettersToLilly2 from '../images/LettersToLilly2.jpeg';
import LettersToLilly3 from '../images/LettersToLilly3.jpeg';
import LettersToLilly4 from '../images/LettersToLilly4.jpeg';
import Mustafa1 from '../images/Mustafa1.JPG';
import Mustafa2 from '../images/Mustafa2.JPG';
import Mustafa3 from '../images/Mustafa3.JPG';
import Mustafa4 from '../images/Mustafa4.JPG';
import Mustafa5 from '../images/Mustafa5.JPG';
import Mustafa6 from '../images/Mustafa6.JPG';
import Mustafa7 from '../images/Mustafa7.JPG';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { AiOutlineInstagram, AiFillFacebook, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { FaTiktok } from "react-icons/fa";



const v1 = "https://www.youtube.com/watch?v=yKs_S6c9yFE"

function Media() {
    return (
        <div>
            <h1 className={styles.h1}>Photos</h1>
            <div className={styles.swiperBig}>
                <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                    slidesPerView={2}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={styles.mySwiper}
                >
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={headshot1} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={headshot2} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={headshot3} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={recital1} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={fledermaus1} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={fledermaus2} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={fledermaus3} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={OLVTraviata1} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={OLVTraviata3} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={OLVTraviata4} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={LettersToLilly1} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={LettersToLilly2} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={LettersToLilly3} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={LettersToLilly4} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa1} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa2} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa3} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa4} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa5} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa6} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa7} /></div></SwiperSlide>
                </Swiper>
            </div>
            <div className={styles.swiperSmall}>
                <Swiper
                style={{
                    "--swiper-navigation-color": "#f8f8f8",
                    "--swiper-pagination-color": "#f8f8f8",
                }}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={styles.mySwiper}
                >
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={headshot1} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={headshot2} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={headshot3} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={recital1} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={fledermaus1} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={fledermaus2} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={fledermaus3} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={OLVTraviata1} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={OLVTraviata3} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={OLVTraviata4} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={LettersToLilly1} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={LettersToLilly2} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={LettersToLilly3} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={LettersToLilly4} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa1} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa2} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa3} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa4} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa5} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa6} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={Mustafa7} /></div></SwiperSlide>
                </Swiper>
            </div>
            <h1 className={styles.h1}>Videos</h1>
            <div className={styles.videos}>
                <iframe 
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/yKs_S6c9yFE" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    className={styles.video}
                    >
                </iframe>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/S22pQYnqRtQ" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    className={styles.video}
                    >
                </iframe>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/kvq2vSovus8" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    className={styles.video}
                    >
                </iframe>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/jjCRzK-dK2c" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    className={styles.video}
                    >
                </iframe>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/5WbOWN5Bras?si=d7zKdLYYahIjIO9q" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    className={styles.video}
                    >
                </iframe>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/reIkSa0WGo8" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    className={styles.video}
                    >
                </iframe>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/yRRBS9DKi_o" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    className={styles.video}
                    >
                </iframe>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/Rm63NCZ_v8M" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    className={styles.video}
                    >
                </iframe>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/S_ohqvB_4Qw" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    className={styles.video}
                    >
                </iframe>
            </div>
            <div className={styles.testimonials}>
                <h1 className={styles.h1}>Testimonials</h1>
                <p className={styles.p}><em>Tremendous voice! Love the color, especially in the lower part of his voice. Intonation and inflection are very good.</em>  - CS Music</p>
                <p className={styles.p}><em>Good Bass, good high notes, very good possibilities!!</em>  - CS Music 2021</p>
                <p className={styles.p}><em>Wow! Norman a wonderful singer/actor. He painted a complete picture that was just chilling. I loved the way he used dynamics in his powerful singing. And he also gave us a performance that used his  entire instrument in a way that supported his voice beautifully. I believed every second! Bravo!</em> - CS Music 2021</p>
            </div>
            <h1 className={styles.h1}>Social Media</h1>
            <div className={styles.socials}>
                <a href="https://www.instagram.com/normanno.espinoza/" target="_blank"><AiOutlineInstagram className={`${styles.icon} ${styles.instagram}`}/></a>
                <a href="https://www.facebook.com/NormanBassoEspinoza" target="_blank"><AiFillFacebook className={`${styles.icon} ${styles.facebook}`}/></a>
                <a href="https://www.youtube.com/channel/UCWuMPcF-W7zr1_ANY21cWjQ" target="_blank"><AiFillYoutube className={`${styles.icon} ${styles.youtube}`}/></a>
                <a href="https://www.linkedin.com/in/norman-espinoza-b762b860/" target="_blank"><AiFillLinkedin className={`${styles.icon} ${styles.linkedin}`}/></a>
                <a href="https://www.tiktok.com/@normanno.espinoza" target="_blank"><FaTiktok className={`${styles.icon} ${styles.tiktok}`}/></a>
            </div>
        </div>
    );
}

export default Media;