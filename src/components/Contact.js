import React, {useState} from 'react'
import "./contact/Contact.scss"
import {contactInformations, contactIcon} from "../data/Contact";

const Content = ({informations}) => (
    <li className="container-col text-l">
        <ul className="pb-2">{informations.description}</ul>

        <ul className="container-row align-center pb-1">
            <i className="material-icons mr-2 t-white">email</i>
            {informations.name}
        </ul>
        <ul className="container-row align-center">
            <i className="material-icons mr-2 t-grey-light">email</i>
            {informations.email}
        </ul>
        <ul className="container-row align-center">
            <i className="material-icons mr-2 t-grey-light">phone_android</i>
            {informations.tel}
        </ul>
    </li>
)

const SocialMedia = ({icons}) => (
    <div className="social-content t-white">
        {icons.map((icon, index) => (
            <a className="social-icon" href={icon.redirect} target="_blank" rel="noopener noreferrer" key={index}><img src={icon.url} alt={icon.alt}/></a>
        ))}
    </div>
)

function Contact({hidden}) {

    return (
        <div className={["contact-container web", hidden ? "hide-content" : "show-content"].join(" ")}>
            <Content informations={contactInformations}/>
            <SocialMedia icons={contactIcon}/>
        </div>
    )
}

export default Contact