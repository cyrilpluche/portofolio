import soccer from '../public/icon_soccer.png'
import music from '../public/icon_music.png'
import video from '../public/icon_video.png'
import camera from '../public/icon_camera.png'
import montpellier from '../public/cover_montpellier.jpg'
import polytech from '../public/cover_polytech.jpg'
import dfco from '../public/cover_dfco.jpg'

import soundcloud from '../public/icon_soundcloud.png'
import facebook from '../public/icon_facebook.png'
import youtube from '../public/icon_youtube.png'
import cover_music from '../public/cover_music.png'

export const aboutmeDescription = {
    name: 'Cyril',
    surname: 'Pluche',
    nationality: 'French',
    dateOfBirth: '2 July 1996',
    placeOfBirth: 'Cherbourg, Normandie',

    title: "Cyril - 23 years old",
    description: [
        "I am a young graduate in Computer Science & Management from the engineering school Polytech Montpellier FRANCE. During my cursus, I had the opportunity to work on various web projects " +
    "with individual and professional clients. These experiences have helped me to shape my professional project and have strengthened my technical and human skills.",
    "Having an interest in art, I love being able to express myself through my work by paying particular attention to small details and by always creating modern and pleasant views. " +
    "Being also a sportsman, I love new challenges and always give the best of myself in order to help and advance the team as well as possible."
        ],
    languages: [
        {country: "fr", level: "Mother tongue"},
        {country: "en", level: "TOIC - 895/990"},
        {country: "de", level: "Bases"},
    ],
    skills: [
        {name: "Javascript", level: "lvl-9"},
        {name: "HTML /CSS", level: "lvl-9"},
        {name: "SQL / noSQL", level: "lvl-8"},
        {name: "Java", level: "lvl-7"},
        {name: "Scala", level: "lvl-6"},
    ],
    hobbies: [
        {name: "Electronic Music", icon: music},
        {name: "Adobe Premiere", icon: video},
        {name: "Adobe After Effects", icon: video},
        {name: "Adobe Photoshop", icon: camera},
        {name: "Adobe Illustrator", icon: camera},
        {name: "Football", icon: soccer},
    ]
}

export const lifeSteps = [
    {
        date: '2019',
        cover: montpellier,
        events : [
            {
                date: 'December',
                title: 'Graduate from Polytech',
                description: 'Engineering degree in Computer Science & Management',
                location: 'Montpellier, France'
            }
        ]
    },
    {
        date: '2016',
        cover: polytech,
        events : [
            {
                date: 'September',
                title: 'Started Polytech Engineering cursus',
                description: 'Computer Science & Management',
                location: 'Montpellier, France'
            }
        ]
    },
    {
        date: '2014',
        cover: polytech,
        events : [
            {
                date: 'September',
                title: 'Polytech Preparatory Classes',
                description: 'Mathematics, Physics, Chemistry, Computer science',
                location: 'Montpellier, France'
            },
            {
                date: 'June',
                title: 'Holder of a Scientist Baccalaureat ranked "good"',
                description: 'Equivalent to GCE "A" levels in science passed with good grades',
                location: 'Dijon, France'
            }
        ]
    },
    {
        date: '2012',
        cover: dfco,
        events : [
            {
                date: 'September',
                title: 'Football high level athlete',
                description: 'Player of the 19 years old squad of Dijon F.C.O (Ligue 1)',
                location: 'Dijon, France'
            }
        ]
    },
]

// V2 =================

export const MeMusic = {
    title: "Music Composer",
    cover: cover_music,
    content:[
        "Passionate about music since I was young, I learned piano on my own and then, at 15, I started to compose electronic music on " +
        "softwares such as Fruity Loops Studio and Ableton Live. I am still regularly sharing new compositions on Soundcloud.",
        "I was able to put this passion at the service of the student life of my school by taking over the DJ club in charge of hosting the various events for 3 years."
    ],
    links: [
        {icon: soundcloud, url: 'https://soundcloud.com/dearpluche/hypercrise', alt: 'soundcloud icon'},
        {icon: facebook, url: 'https://www.facebook.com/dearpluche', alt: 'facebook icon'},
        {icon: youtube, url: 'https://www.youtube.com/watch?v=o5WRv_GJ4zc', alt: 'youtube icon'},
    ]
}
