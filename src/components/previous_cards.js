import olv from './images/olv.png';
import scs from './images/scs.png';
import vnm from './images/VNM.png';
import osb from './images/osb.png';
import pc from './images/pc.png';
import lvo from './images/lvo.png';
import vco from './images/vco.png';
import art from './images/art.png';
import csuf from './images/csuf.png';
import loooc from './images/loooc.png';
import boa from './images/boa.png';
import jo from './images/jo.png';
import sjsu from './images/sjsu.png';

const cards = [
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

    {
        opera: "The Crucible",
        role: "Reverend Hale (Role Debut)",
        link: "https://www.berlinoperaacademy.com/",
        company: "Berlin Opera Academy",
        performances: ["August 15th 7:30pm", "August 16th 7:30pm"],
        location: "Berlin Germany",
        image: boa,
    },

    {
        opera: "Rigoletto",
        role: "Sparafucile (Role Debut)",
        link: "https://www.facebook.com/vocinelmontefeltro/",
        company: "Voci Nel Montefeltro",
        performances: ["July 15th 9:15pm", "July 16th 9:15pm"],
        location: "San Marino/Novafeltria, Italy",
        image: vnm,
    },

    {
        opera: "Le Nozze di Figaro",
        role: "Antonio (Role Debut)",
        link: "https://www.facebook.com/vocinelmontefeltro/",
        company: "Voci Nel Montefeltro",
        performances: ["July 10th 9:15pm", "July 17th 9:15pm"],
        location: "Cagli/Novafeltria, Italy",
        image: vnm,
    },

    {
        opera: "The Consul",
        role: "Mr. Kofner (Role Debut)",
        link: "http://justopera.org/?fbclid=IwAR3--_MqPtTrfubdxwBBCO_dHiW3GOBMNYKX10ECoAISUXgi4vx1NIEwYCo",
        company: "Just Opera",
        performances: ["August 25th 7:30pm", "August 27th 5:00pm"],
        location: "San Jose, California",
        image: jo,
    },

    {
        opera: "Die Fledermaus",
        role: "Frank (Role Debut)",
        link: "https://www.sjsu.edu/music/index.php",
        company: "San Jose State University",
        performances: ["May 4th 7:00pm", "May 6th 3:00pm"],
        location: "San Jose, California",
        image: sjsu,
    },

]

export default cards;