import React, {useState} from 'react'
import "./AboutMe.scss"

const Timeline = ({step}) => {

    return (
        <div className="timeline-container">
            <div className="timeline"></div>
            <div className={["cursor", "step-" + step].join(" ")}>
            <i className="material-icons">keyboard_arrow_left</i>
            </div>
        </div>
    )
}

const AboutMe = ({hidden}) => {

    const [step, setStep] = useState(0)

    const increase = () => {
        setStep(step + 1)
    }

    return (
        <div className={["aboutme-container", hidden ? "hide-content" : "show-content"].join(" ")}>
            <div onClick={increase}>cacahuete</div>
            <Timeline step={step}/>
        </div>
    )
}

export default AboutMe