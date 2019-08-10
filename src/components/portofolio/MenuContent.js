import React from 'react';
import Divider from '@material-ui/core/Divider';
import {languages} from "../../data/Portofolio";
import Dialog from '@material-ui/core/Dialog';
import Title3 from "../library/text/Text";

function TopContent({title, role, company, location, period}) {
    return (
        <div className="container-row justify-between pb-2">
            <div className="container-col">
                <div className="card-title">{title.toUpperCase()}</div>
                <div>{role.toUpperCase()}</div>
                <div>{period}</div>
            </div>
            <div className="container container-col align-end">
                <div>{company}</div>
                <div>{location}</div>
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
                    <ul className="p-0 my-0 mr-1" key={index}>{l.toUpperCase()}</ul>
                ))}
            </li>
        </React.Fragment>
    )
}

const KeyWords = ({words}) => {
    return (
        <React.Fragment>
            <Title3 text="Key words"/>
            <li className="container-row">
                {words.map((word, index) => (
                    <ul className="p-0 my-0 mr-1" key={index}>{word.toUpperCase()}</ul>
                ))}
            </li>
        </React.Fragment>
    )
}

export const MenuContent = ({item, isMobile}) => {

    return (
        <div className="container container-row content-center">
            <div id="menu-content" className="container-col">
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
        <Dialog onClose={() => setOpen(false)} aria-labelledby="simple-dialog-title" open={open}>
            <div className="p-1">
                <MenuContent item={item} isMobile={true}/>
            </div>
        </Dialog>
    )
}
