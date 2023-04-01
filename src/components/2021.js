import olv from './images/olv.png';
import osb from './images/osb.png';
import vco from './images/vco.png';
import art from './images/art.png';
import csuf from './images/csuf.png';
import loooc from './images/loooc.png';

const cards = [
    {
        opera: "Holiday on Broadway",
        role: null,
        link: "https://operalasvegas.com/productions/holiday-on-broadway/",
        company: "Opera Las Vegas",
        performances: ["December 4th 7:00pm"],
        location: "Las Vegas, Nevada",
        image: olv,
    },

    {
        opera: "La Bohème",
        role: "Colline (Role Debut)",
        link: null,
        company: "Vegas City Opera",
        performances: ["November 12th 7:30pm", "November 13th 7:30pm", "November 14th 2:30pm", "November 19th 7:30pm", "November 20th 7:30pm", "November 21st 2:30pm"],
        location: "Las Vegas, Nevada",
        image: vco,
    },

    {
        opera: "Il Tabarro",
        role: "Stevedore (Christman Studio Artist)",
        link: null,
        company: "Opera Santa Barbara",
        performances: ["October 29th 7:30pm", "October 31st 2:30pm"],
        location: "Santa Barbara, California",
        image: osb,
    },

    {
        opera: "La Cenerentola",
        role: "Alidoro (Role Debut)",
        link: "https://www.alringling.org/",
        company: "Al. Ringling Theatre",
        performances: ["July 13th 7:00pm", "July 19th 7:00pm"],
        location: "Baraboo, Wisconsin",
        image: art,
    },

    {
        opera: "Don Giovanni",
        role: "Il Commendatore (Role Debut/Guest Artist)",
        link: "https://www.fullerton.edu/arts/",
        company: "Cal State University - Fullerton",
        performances: ["May 14th 6:00pm", "May 15th 6:00pm", "May 16th 6:00pm"],
        location: "Fullerton, California",
        image: csuf,
    },

    {
        opera: "Amahl and the Night Visitors",
        role: "King Balthazar",
        link: "https://lyricoperaoc.org/",
        company: "Lyric Opera of Orance County",
        performances: ["December 29th 6:00pm (2019)", "January 4th 7:00pm", "January 5th 7:00pm"],
        location: "Rancho Santa Margarita, California",
        image: loooc,
    },
]

export default cards;