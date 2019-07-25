const fitnet = {
    menuTitle: 'Cross-platform application Android & iOS',
    title: 'Fitnet Manager smartphone application 2.0',
    company: 'Fitnet Manager',
    location: 'Montpellier, France',
    description: 'Created in 2008, Fitnet Manager is a large-scale Cloud ERP Solution automating full administrative process. As a ready-to-use ERP, it is a scalable system with real-time data access that aims at automating administrative processes in the Cloud (+1M lignes of code, +250 datatables).',
    mission: 'I built the brand new smartphone application of the company based on modern languages and designs. This project was started from scratch and required smart conception and modelisation. I also worked on the server side to create micro-services and interact like a RESTful API.',
    keyWords: ['Cross-platform', 'Android', 'iOS', 'API'],

    role: 'Full-stack',
    languages: [
        "Ionic",
        "Redux",
        "Angular 2+",
        "Java",
        "MySQL"
    ],
    period: "18/02/19 - 02/08/19"
}

const jigsaw = {
    menuTitle: 'Web Intelligence Toxicity Classification',
    title: 'Identify and classify toxic online comments',
    company: 'Jigsaw',
    location: 'Competition',
    description: 'The Conversation AI team, a research initiative founded by Jigsaw and Google (both a part of Alphabet) are working on tools to help improve online conversation. One area of focus is the study of negative online behaviors, like toxic comments (i.e. comments that are rude, disrespectful or otherwise likely to make someone leave a discussion)',
    mission: 'Based on a large dataset, I worked as a data engineer to understand and clean each properties of the set in order to fit a nice model based on logistic regression. I also evaluated the efficiency of the model to provide credible results and predictions.',
    keyWords: ['AI', 'Predictions', 'logistic regression', 'Big data'],

    role: 'Developer',
    languages: [
        "Scala",
    ],
    period: "02/19 - 04/19"
}

const prello = {
    menuTitle: 'Trello style tool',
    title: 'Prello',
    company: 'Polytech',
    location: 'Montpellier, France',
    description: 'This project was carried out in the context of our engineering school, Polytech Montpellier. During their studies, Polytech students have multiple projects, usually in team or sometimes alone. Depending on which department, students don’t always use management tools to stay organized. It can quickly become complex to work efficiently when multiple projects are happening at the same moment.',
    mission: "In a team of 5 developers, we created a web application, available for each student of Polytech and gave them an efficient way to organize their works and projects. We proposed to deal with the topic by gathering all their projects in the same place and breaking down them in small tasks dispatched between members of the project. Users can connect with their Github account and download the tool as a desktop application working on Windows, Linux and Mac (Electron application).",
    keyWords: ['Web Application', 'Management', 'Trello'],

    role: 'Full-stack',
    languages: [
        "React",
        "Node.js",
        "Material UI",
        "PostgreSQL",
        "Redux"
    ],
    period: "10/18 - 12/18"
}

const amazon = {
    menuTitle: 'Amazon Alexa Skill',
    title: 'Trametro Montpellier',
    company: 'Polytech',
    location: 'Montpellier, France',
    description: 'This project was carried out in the context of our engineering school, Polytech Montpellier. Amazon Alexa, known simply as Alexa, is a virtual assistant developed by Amazon, first used in the Amazon Echo and the Amazon Echo Dot smart speakers developed by Amazon Lab126. It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news.',
    mission: "Trametro is the skill I built which allows you to ask for next tramway schedules in real-time. After programming Alexa client side to handle user vocal sentences, I create my own server which retrieve tramway schedules and select corresponding slots. Finally, I also developed a separate smartphone interface for a personal use and to experiment React Native framework.",
    keyWords: ['Alexa', 'Amazon', 'Vocal'],

    role: 'Full-stack',
    languages: [
        "React Native",
        "Node.js",
    ],
    period: "10/18 - 12/18"
}

const bali = {
    menuTitle: 'Project Management Tool',
    title: 'SOP Manager',
    company: 'University Stikom',
    location: 'Denpasar, Bali, Indonesia',
    description: "During the year, the university of Stikom Bali carries projects named as Standard Procedurale Operations (SOP). These projects can last one day, one week or a few months and needs to be followed by a planner which affects staff members on each task, check their results and generate reports. These actions are really similar for each project so the main goal of the demand was to facilitate these planifications and save time on it",
    mission: "In a team of 3 developers, we modeled and implemented the project monitoring by creating an internal web application. We regularly organized meetings with our client where we presented the project status.",
    keyWords: ['Web', 'Project Management', 'Conception', 'Modelisation'],

    role: 'Front-end',
    languages: [
        "Angular 2+",
        "Node.js",
        "Bootstrap",
        "PostgreSQL",
    ],
    period: "01/06/18 - 12/08/18"
}

export const experiences = [
    {
        title: 2019,
        items: [
            fitnet,
            jigsaw,
        ]
    },
    {
        title: 2018,
        items: [
            prello,
            amazon,
            bali,
        ]
    }
]

export const languages = [
    "Angular 2+",
    "React",
    "React Native",
    "Node.js",
    "Redux",
    "Ionic",
    "Redux",
    "Java",
    "Scala",
    "Bootstrap",
    "Material UI",
    "MySQL",
    "PostgreSQL",
    "MongoDB"
]


/*const fitnet = {
    title: 'Cross-platform application Android & iOS',
    coverUrl: coverBali,
    description: {
        short: 'Recreate from scratch the mobile application of the company with design and functional improvements',
        full: 'Build a cross-platform smartphone application of the company using Ionic4 and Angular7. Fitnet manager is a large scale application dealing with administrative process of other company'
    },
    company: 'Fitnet Manager',
    companyIcon: iconFitnet,
    location: {
        city: 'Montpellier',
        country: 'France'
    },
    languages: [
        'Ionic 4',
        'Angular 7',
        'Java 7'
    ],
    date: {
        start: '18/02/2019',
        end: '02/08/2019'
    }
}*/