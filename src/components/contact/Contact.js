import React from 'react'
import "./style.scss"
import {contactInformations, contactIcon} from "../../data/Contact";

const Content = ({isMobile, informations}) => (
    <div className="container-col mr-2">
        <div className="title-2 mb-2">{informations.name}</div>
        <div className="title-2">{informations.email}</div>
        <div className="title-2 mb-1">{informations.tel}</div>
        {isMobile ? <SocialMedia isMobile={isMobile} /> : null}
    </div>
)

/*
        <ul className="pb-1 text-l">{informations.description}</ul>

 */

const SocialMedia = ({isMobile}) => {
    const icons = contactIcon
    return (
        <React.Fragment>
            <div className={isMobile ? "container-row" : "container-row-reverse"}>
                {icons.map((icon, index) => (
                    <a className="social-icon" href={icon.redirect} target="_blank" rel="noopener noreferrer"
                       key={index}><img src={icon.url} alt={icon.alt}/></a>
                ))}
            </div>
        </React.Fragment>
    )
}

function Contact({isMobile}) {

    return (
        <div className="page-container-fixed container-col content-center">
            <div id="contact-container">
                <div className="container-col justify-between">
                    <div className="title-3 mt-0 pb-2">{contactInformations.description}</div>
                    {!isMobile ? <SocialMedia isMobile={isMobile} /> : null}
                </div>
                <Content isMobile={isMobile} informations={contactInformations}/>
            </div>
        </div>
    )
}

export default Contact