import soccer from '../public/icon_soccer.png'
import music from '../public/icon_music.png'
import video from '../public/icon_video.png'
import camera from '../public/icon_camera.png'
import montpellier from '../public/cover_montpellier.jpg'
import polytech from '../public/cover_polytech.jpg'
import dfco from '../public/cover_dfco.jpg'

export const aboutmeDescription = {
    name: 'Cyril',
    surname: 'Pluche',
    nationality: 'French',
    dateOfBirth: '2 July 1996',
    placeOfBirth: 'Cherbourg, Normandie',

    title: "Currently finishing my end-of-studies internship, I'm looking for an opportunity abroad to challenge myself and discover a new culture.",
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
