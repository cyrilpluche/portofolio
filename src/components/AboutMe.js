import React, {useState} from 'react'
import "./AboutMe.scss"
import {lifeSteps} from "../data/AboutMe";
import {aboutmeDescription} from "../data/AboutMe";

const Timeline = ({step}) => {

    return (
        <div className="timeline-container mb-2">
            <div className="timeline"/>
            <div className={["cursor", "step-" + step].join(" ")}>
                <i className="material-icons cursor-icon">keyboard_arrow_left</i>
            </div>
        </div>
    )
}

const TimelineContent = ({activeItem, setHover}) => {

    console.log(activeItem)

    const isActive = item => {
        return activeItem.date === item.date
    }

    /*
    {isActive(step) ? (
                            <img className="timeline-cover" src={step.cover} alt="timeline cover"/>
                        ) : null}
     */

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

/*
 {skills.map((skill, index) => (
                <div className="container-row justify-between" key={index}>
                    {skill.name}
                    <div className="level-bar-container">
                        <div className={["level-bar", skill.level].join(" ")}/>
                    </div>
                </div>
            ))}
 */

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

const AboutMe = ({isMobile}) => {

    const [openDrawer, setOpenDrawer] = useState(false)
    const [step, setStep] = useState(0)
    const [activeItem, setActiveItem] = useState(lifeSteps[0])

    const onOpenDrawer = () => {
        setOpenDrawer(!openDrawer)
    }

    const handleHover = item => {
        setActiveItem(item)
        setStep(lifeSteps.indexOf(item))
    }

    return (
        <div className="full-height container-col scroll-hidden">
            <div className="scroll-x-hidden">
                <div className="text-center text-l py-1 pb-2">{aboutmeDescription.title}</div>
                <div className={["drawer mb-2", openDrawer ? "open-drawer" : null].join(" ")}>
                    <Skills skills={aboutmeDescription.skills}/>
                    <i className={["clickable drawer-icon material-icons", openDrawer ? "flip-drawer-icon" : null].join(" ")}
                       onClick={onOpenDrawer}>arrow_forward_ios</i>
                    <Hobbies hobbies={aboutmeDescription.hobbies}/>
                </div>
                <Timeline step={step}/>
                <TimelineContent activeItem={activeItem} setHover={handleHover}/>
            </div>
        </div>
    )
}

export default AboutMe

/*
<div id="about-me-drawer" className="container-row justify-between align-end scroll-hidden">
            <div className="text-center text-l py-1 pb-2">{aboutmeDescription.title}</div>

                <div className={["drawer", openDrawer ? "open-drawer" : null].join(" ")}>
                    <Skills skills={aboutmeDescription.skills}/>
                    <i className={["clickable drawer-icon material-icons", openDrawer ? "flip-drawer-icon" : null].join(" ")}
                       onClick={onOpenDrawer}>arrow_forward_ios</i>
                    <Hobbies hobbies={aboutmeDescription.hobbies}/>
                </div>
            </div>
            <div className="grid-50-100">
                <div className="text-center text-l py-1 pb-2">{aboutmeDescription.title}</div>
            </div>
 */