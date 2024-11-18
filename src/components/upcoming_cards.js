import olv from './logos/olv2.png';
import scs from './logos/scs.png';
import unlv from './logos/UNLV.PNG';

const cards = [
    {
        opera: "Il Barbiere di Siviglia",
        role: "Fiorello",
        link: null,
        company: "Opera Las Vegas",
        performances: ["February 21th 7:30pm (2025)", "February 23rd 3:00pm"],
        location: "Las Vegas, Nevada",
        image: olv
    },
    {
        opera: "Holiday on Broadway",
        role: "Bass soloist",
        link: "https://operalasvegas.com/productions/holiday-on-broadway-4/",
        company: "Opera Las Vegas",
        performances: ["December 14th 3:00pm"],
        location: "Las Vegas, Nevada",
        image: olv
    },
    {
        opera: "Voices Raised for Vets",
        role: "Bass soloist",
        link: "https://operalasvegas.com/productions/voices-raised-for-vets-3/",
        company: "Opera Las Vegas",
        performances: ["November 10th 3:00pm"],
        location: "Las Vegas, Nevada",
        image: olv
    },
    {
        opera: "Cuatro Canciones de las Última Horas Recital",
        role: "",
        link: null,
        company: "Album concert debut",
        performances: ["November 4th 3pm"],
        location: "UNLV Campus",
        image: unlv
    }
]

export default cards;