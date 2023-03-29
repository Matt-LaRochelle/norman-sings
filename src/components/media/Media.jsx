import React from 'react';
import styles from './Media.module.css';
import N10 from '../images/N10.jpg';
import N11 from '../images/N11.jpeg';
import N12 from '../images/N12.jpeg'
import N13 from '../images/N13.jpeg'
import N14 from '../images/N14.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import instagram from 

AiOutlineInstagram


const v1 = "https://www.youtube.com/watch?v=yKs_S6c9yFE"

function Media() {
    return (
        <div>
            <Swiper
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
                <SwiperSlide><img className={styles.img} src={N10} /></SwiperSlide>
                <SwiperSlide><img className={styles.img} src={N11} /></SwiperSlide>
                <SwiperSlide><img className={styles.img} src={N12} /></SwiperSlide>
                <SwiperSlide><img className={styles.img} src={N13} /></SwiperSlide>
                <SwiperSlide><img className={styles.img} src={N14} /></SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
            </Swiper>
            <div className={styles.videos}>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/yKs_S6c9yFE" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    >
                </iframe>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/S22pQYnqRtQ" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    >
                </iframe>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/kvq2vSovus8" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    >
                </iframe>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/jjCRzK-dK2c" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    >
                </iframe>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/reIkSa0WGo8" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    >
                </iframe>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/yRRBS9DKi_o" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    >
                </iframe>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/Rm63NCZ_v8M" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    >
                </iframe>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/S_ohqvB_4Qw" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    >
                </iframe>
            </div>
            <div className={styles.testimonials}>
                <h1 className={styles.h1}>Testimonials</h1>
                <p className={styles.p}><em>Tremendous voice! Love the color, especially in the lower part of your voice. Intonation and inflection are very good.</em>  - CS Music 2021</p>
                <p className={styles.p}><em>Good Bass, good high notes, very good possibilities!!</em>  - CS Music 2021</p>
                <p className={styles.p}><em>Wow! You are a wonderful singer/actor. You painted a complete picture that was just chilling. I loved the way you used dynamics in your powerful singing. And you also gave us a performance that used your entire instrument in a way that supported your voice beautifully. I believed every second! Bravo! </em> - CS Music 2021</p>
            </div>
        </div>
    );
}

export default Media;