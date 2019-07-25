import React, {useState} from 'react'
import "./AboutMe.scss"
import {lifeSteps} from "../data/AboutMe";

const Timeline = ({step}) => {

    return (
        <div className="timeline-container">
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
        console.log(activeItem)
        return activeItem.date === item.date
    }

    return (
        <div className="timeline-content-container">
            <div className="container-row justify-between">
                {lifeSteps.map((step, index) => (
                    <div className={["container-col timeline-section", isActive(step) ? "timeline-section-active" : null].join(" ")} key={index} onMouseOver={() => setHover(step)}>
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
                ))}
            </div>
        </div>
    )
}

const AboutMe = ({hidden}) => {

    const [step, setStep] = useState(0)
    const [activeItem, setActiveItem] = useState(lifeSteps[0])

    const increase = () => {
        setStep(step + 1)
    }

    const handleHover = item => {
        setActiveItem(item)
        setStep(lifeSteps.indexOf(item))
    }

    console.log(activeItem)

    return (
        <div className={["aboutme-container", hidden ? "hide-content" : "show-content"].join(" ")}>
            <div onClick={increase}>cacahuete</div>
            <Timeline step={step}/>
            <TimelineContent activeItem={activeItem} setHover={handleHover}/>
        </div>
    )
}

export default AboutMe