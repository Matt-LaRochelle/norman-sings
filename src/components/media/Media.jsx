import React from 'react';
import styles from './Media.module.css';
import N10 from '../images/N10.jpg';
import N11 from '../images/N11.jpeg';
import N12 from '../images/N12.jpeg'
import N13 from '../images/N13.jpeg'
import N14 from '../images/N14.jpeg'
import N20 from '../images/N20.jpg';
import N21 from '../images/N21.JPG';
import N22 from '../images/N22.JPG';
import N23 from '../images/N23.JPG';
import N24 from '../images/N24.JPG';
import N25 from '../images/N25.JPG';
import N26 from '../images/N26.JPG';
import N27 from '../images/N27.JPG';
import N28 from '../images/N28.JPG';
import N29 from '../images/N29.JPG';
import N30 from '../images/N30.JPG';
import N31 from '../images/N31.jpg';
import N32 from '../images/N32.jpg';
import N33 from '../images/N33.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { AiOutlineInstagram, AiFillFacebook, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';




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
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N20} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N21} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N22} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N23} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N24} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N25} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N26} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N27} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N28} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N29} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N30} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N31} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N32} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N33} /></div></SwiperSlide>
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
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N10} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N11} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N12} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N13} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}><img className={styles.img} src={N14} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.slide}>Slide 6</div></SwiperSlide>
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
                <p className={styles.p}><em>Tremendous voice! Love the color, especially in the lower part of your voice. Intonation and inflection are very good.</em>  - CS Music 2021</p>
                <p className={styles.p}><em>Good Bass, good high notes, very good possibilities!!</em>  - CS Music 2021</p>
                <p className={styles.p}><em>Wow! You are a wonderful singer/actor. You painted a complete picture that was just chilling. I loved the way you used dynamics in your powerful singing. And you also gave us a performance that used your entire instrument in a way that supported your voice beautifully. I believed every second! Bravo! </em> - CS Music 2021</p>
            </div>
            <h1 className={styles.h1}>Social Media</h1>
            <div className={styles.socials}>
                <a href="https://www.instagram.com/normanno.espinoza/"><AiOutlineInstagram className={`${styles.icon} ${styles.instagram}`}/></a>
                <a href="https://www.facebook.com/NormanBassoEspinoza"><AiFillFacebook className={`${styles.icon} ${styles.facebook}`}/></a>
                <a href="https://www.youtube.com/channel/UCWuMPcF-W7zr1_ANY21cWjQ"><AiFillYoutube className={`${styles.icon} ${styles.youtube}`}/></a>
                <a href="https://www.linkedin.com/in/norman-espinoza-b762b860/"><AiFillLinkedin className={`${styles.icon} ${styles.linkedin}`}/></a>
            </div>
        </div>
    );
}

export default Media;