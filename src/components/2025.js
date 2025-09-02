import olv from './logos/olv2.png';
import clark from './logos/clark.png';
import dra from './logos/dra.jpg';
import vnm from './logos/VNM.png';

const cards = [
        {
        opera: "Norman Espinoza Bass Recital",
        role: null,
        link: null,
        company: "Windmill Library",
        performances: ["August 29th 3:00pm"],
        location: "Las Vegas, Nevada",
        image: clark
    },
    {
        opera: "Dr. Charlene Archibeque’s 90th Birthday",
        role: "Soloist",
        link: null,
        company: "San Jose State University",
        performances: ["July 19th 3:00pm"],
        location: "San Jose, CA",
        image: dra
    },
    {
        opera: "Rigoletto",
        role: "Sparafucile",
        link: null,
        company: "Voci nel Montefeltro",
        performances: ["July 14th 9:00pm", "July 16th 9:00pm"],
        location: "Novafeltria, Italy",
        image: vnm
    },
        {
        opera: "Il Barbiere di Siviglia",
        role: "Fiorello",
        link: null,
        company: "Opera Las Vegas",
        performances: ["February 21st 7:30pm", "February 23rd 3:00pm"],
        location: "Las Vegas, Nevada",
        image: olv
    }
]

export default cards;