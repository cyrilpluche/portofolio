import React from 'react'
import "./style.scss"
import Card from "../library/card/Card"
import {lifeSteps} from "../../data/AboutMe";
import {aboutmeDescription} from "../../data/AboutMe";
import {MeMusic} from "../../data/AboutMe";

const Informations = ({informations}) => {
    return (
        <div className="container-col text-m mb-2 pl-1">
            <div className="container-row">
                <i className="material-icons pr-1">account_box</i>
                <div>{informations.name + ' ' + informations.surname}</div>
            </div>
            <div className="container-row ">
                <i className="material-icons pr-1">flag</i>
                <div>{informations.nationality}</div>
            </div>
            <div className="container-row ">
                <i className="material-icons pr-1">grade</i>
                <div>{informations.dateOfBirth}</div>
            </div>
            <div className="container-row ">
                <i className="material-icons pr-1">my_location</i>
                <div>{informations.placeOfBirth}</div>
            </div>
        </div>
    )
}

const Timeline = ({step}) => {

    return (
        <div className="timeline-container mb-2">
            <div className="timeline"/>
            <div className={["cursor", "step-" + step].join(" ")}>
                <i className="material-icons pr-1 cursor-icon">keyboard_arrow_left</i>
            </div>
        </div>
    )
}

const TimelineContent = ({activeItem, setHover}) => {

    const isActive = item => {
        return activeItem.date === item.date
    }

    return (
        <div className="container-row justify-center">
            <div className="container-timeline">
                {lifeSteps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div
                            className={["container-col timeline-section pb-1", isActive(step) ? "timeline-section-active" : null].join(" ")}
                            onMouseOver={() => setHover(step)}>
                            <div className="text-m mb-1">{step.date}</div>
                            <div className="timeline-detail container-col">
                                {step.events.map((event, index) => (
                                    <React.Fragment key={index}>
                                        <div>{event.title}</div>
                                        <div className="t-grey-light mb-1">{event.description}</div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

const Skills = ({skills}) => {

    const getLevel = ({skill}) => {

    }

    return (
        <div className="drawer-content pl-1">
            {skills.map((skill, index) => (
                <div className="container-row justify-between" key={index}>
                    {skill.name}
                    <div className="level-bar-container">
                        <div className={["level-bar", skill.level].join(" ")}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Hobbies = ({hobbies}) => {

    return (
        <div className="drawer-content container-col justify-between">
            {hobbies.map((hobbie, index) => (
                <div className="container-row align-center" key={index}>
                    <img className="mr-1" src={hobbie.icon} alt="hobbie icon"/>
                    <div>
                        {hobbie.name}
                    </div>
                </div>
            ))}
        </div>
    )
}

const AboutPage = ({isMobile}) => {

    return (
        <div className="page-container nav-space container-col align-center scroll-x-hidden">
            <div className="mb-2">
                <Card title={aboutmeDescription.title} content={aboutmeDescription.description}/>
            </div>
            <Card title={MeMusic.title} content={MeMusic.content} links={MeMusic.links}/>
        </div>
    )
}

export default AboutPage
