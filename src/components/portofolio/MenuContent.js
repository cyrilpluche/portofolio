import React from 'react';
import Divider from '@material-ui/core/Divider';
import {languages} from "../../data/Portofolio";
import Dialog from '@material-ui/core/Dialog';
import Title3 from "../library/text/Text";
import "./style.scss"

function TopContent({title, role, company, location, period}) {
    return (
        <div className="container-row justify-between pb-2">
            <div className="container-col">
                <div className="card-title">{title.toUpperCase()}</div>
                <div className="title-2">{role}</div>
                <div className="title-caption">{period}</div>
            </div>
            <div className="container container-col align-end">
                <div className="title-2">{company}</div>
                <div className="title-caption">{location}</div>
            </div>
        </div>
    )
}

const KeyContent = ({words}) => (
    <li className="container-row justify-between">
        <ul className="p-0">
            <i className="material-icons">vpn_key</i>
        </ul>
        {words.map((word, index) => (
            <ul className="p-0" key={index}>{word}</ul>
        ))}
    </li>
)

const Languages = ({selectedLanguages}) => {
    return (
        <React.Fragment>
            <Title3 text="Technologies"/>
            <li className="container-row">
                {selectedLanguages.map((l, index) => (
                    <ul className="p-0 my-0 mr-1 color-primary-contrast" key={index}>{l.toUpperCase()}</ul>
                ))}
            </li>
        </React.Fragment>
    )
}

const KeyWords = ({words}) => {
    return (
        <React.Fragment>
            <Title3 text="Key words"/>
            <li className="container-row mb-2">
                {words.map((word, index) => (
                    <ul className="p-0 my-0 mr-1 color-primary-contrast" key={index}>{word.toUpperCase()}</ul>
                ))}
            </li>
        </React.Fragment>
    )
}

export const MenuContent = ({item, isMobile}) => {

    return (
        <div className="container container-col content-center">
            <div id="menu-content" className="scroll">
                <TopContent period={item.period} title={item.title} role={item.role} company={item.company}
                            location={item.location}/>
                <div className="card-content">{item.description}</div>
                <div className="card-content">{item.mission}</div>
                <Languages selectedLanguages={item.languages}/>
                <KeyWords words={item.keyWords}/>
            </div>
        </div>
    );
}

/*
<KeyContent words={item.keyWords}/>
 */

export const MenuDialog = ({open, setOpen, item}) => {

    return (
        open ? (
            <div id="portfolio-dialog">
                <div className="container-fill">
                    <div className="container-row-reverse align-center nav-space">
                        <i onClick={() => setOpen(false)}
                           className="portfolio-icon material-icons text-xxl p-1">clear</i>
                    </div>
                    <div className="portfolio-dialog-content">
                        <MenuContent item={item} isMobile={true}/>
                    </div>
                </div>
            </div>
        ) : null
    )
}

/*
<div className="portfolio-dialog-content">
                    <div className="container-row-reverse align-center">
                        <i onClick={() => setOpen(false)}
                           className="portfolio-icon material-icons text-xxl p-1">clear</i>
                    </div>
                    <div className="navbar-dialog-content">
                        <MenuContent item={item} isMobile={true}/>
                    </div>
                </div>
 */