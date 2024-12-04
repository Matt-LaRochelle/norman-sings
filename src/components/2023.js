import scs from './logos/scs.png';
import m from './logos/modesto.jpg';
import olv from './logos/olv2.png';

const cards = [
    {
        opera: "Die Fledermaus",
        role: "Frank",
        link: "https://www.operamodesto.org/",
        company: "Opera Modesto",
        performances: ["October 13th 7:30pm", "October 15th 3:00pm"],
        location: "Modesto, California",
        image: m,
    },
    {
        opera: "La Traviata",
        role: "Dottore Grenvil",
        link: "https://operalasvegas.com/productions/la-traviata/",
        company: "Opera Las Vegas",
        performances: ["June 9th 7:30pm", "June 11th 2:00pm"],
        location: "Las Vegas, Nevada",
        image: olv
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
]

export default cards;