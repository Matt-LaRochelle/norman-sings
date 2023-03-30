import olv from './images/olv.png';
import scs from './images/scs.png';

const cards = [
    {
        opera: "La Traviata",
        role: "Dottore Grenvil",
        link: "https://operalasvegas.com/productions/la-traviata/",
        company: "Opera Las Vegas",
        performances: ["June 9th 7:30pm", "June 11th 2:00pm"],
        location: "Las Vegas, Nevada",
        image: olv,
    },

    {
        opera: "Tosca",
        role: "Il Segrastano (Role Debut)",
        link: "https://app.arts-people.com/index.php?clear_session=This+show+is+not+currently+available+for+purchase.+For+assistance+please+contact+our+box+office+at+714+731-8079.&theatre_id=3020",
        company: "Sout Coast Symphony",
        performances: ["March 25th 7:30pm"],
        location: "Aliso Viejo, California",
        image: scs,
    },

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
    }

]

export default cards;