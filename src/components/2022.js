import olv from './images/olv.png';
import vnm from './images/VNM.png';
import osb from './images/osb.png';
import pc from './images/pc.png';
import lvo from './images/lvo.png';


const cards = [
    {
        opera: "Holiday on Broadway",
        role: null,
        link: "https://operalasvegas.com/productions/holiday-on-broadway-2/",
        company: "Opera Las Vegas",
        performances: ["December 13th 6:00pm"],
        location: "Las Vegas, Nevada",
        image: olv,
    },

    {
        opera: "Voices Raised for Vets",
        role: null,
        link: "https://operalasvegas.com/productions/voices-raised-for-vets/",
        company: "Opera Las Vegas",
        performances: ["November 12th 3:00pm"],
        location: "Las Vegas, Nevada",
        image: olv,
    },

    {
        opera: "Letters to Lily",
        role: "Frank (World Premiere)",
        link: "https://operalasvegas.com/productions/letters-to-lily/",
        company: "Opera Las Vegas",
        performances: ["September 30th 7:30pm", "October1st 7:30pm", "October 2nd 3:00pm"],
        location: "Las Vegas, Nevada",
        image: olv,
    },

    {
        opera: "L'italiana in Algeri",
        role: "Mustafà (Role Debut)",
        link: "https://www.facebook.com/vocinelmontefeltro/",
        company: "Voci nel Montefeltro",
        performances: ["July 11th 9:00pm (Novafeltria, Italy)", "July 14th 9:00pm (Novafeltria, Italy)", "July 18th 9:00pm (Alfonsine, Italy)", "July 21st 9:00pm (Santarcangelo, Italy)"],
        location: "Italy",
        image: vnm,
    },

    {
        opera: "La Bohème",
        role: "Colline",
        link: "https://www.facebook.com/vocinelmontefeltro/",
        company: "Voci nel Montefeltro",
        performances: ["July 12th 9:00pm (Novafeltria, Italy)", "July 20th 9:00pm (Santarcangelo, Italy)"],
        location: "Italy",
        image: vnm,
    },

    {
        opera: "La Traviata",
        role: "Dottore Grenvil (Role Debut)",
        link: "https://www.operasb.org/events/event/la-traviata/",
        company: "Opera Santa Barbara",
        performances: ["June 12th 2:30pm"],
        location: "Santa Barbara, California",
        image: osb,
    },

    {
        opera: "Beethoven Mass in C Major",
        role: "Bass Soloist",
        link: "https://peninsulacantare.org/current-season/",
        company: "Peninsula Cantare",
        performances: ["May 21st 7:30pm"],
        location: "Palo Alto, California",
        image: pc,
    },

    {
        opera: "Speed Dating Tonight",
        role: "Car Guy (Role Debut)",
        link: "https://www.operasb.org/events/event/speed-dating-tonight/",
        company: "Opera Santa Barbara",
        performances: ["April 9th 7:30pm", "April 10th 2:30pm"],
        location: "Santa Barbara, California",
        image: osb,
    },

    {
        opera: "Otello",
        role: "Montano (Role Debut)",
        link: "https://livermorevalleyopera.com/event/otello/",
        company: "Livermore Valley Opera",
        performances: ["March 5th 7:30pm", "March 6th 2:00pm", "March 12th 7:30pm", "March 13th 2:00pm"],
        location: "Livermore, California",
        image: lvo,
    },

    {
        opera: "Semele",
        role: "Cadmus/Somnus (Cover)",
        link: "https://www.operasb.org/events/event/semele/",
        company: "Opera Santa Barbara",
        performances: ["January 14th 7:30pm", "January 16th 2:30pm"],
        location: "Santa Barbara, California",
        image: osb,
    },
]

export default cards;