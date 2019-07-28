import React from 'react';
import Divider from '@material-ui/core/Divider';
import {languages} from "../../data/Portofolio";
import Dialog from '@material-ui/core/Dialog';

function TopContent({title, role, company, location, period}) {
    return (
        <div className="container-row justify-between pb-2">
            <div className="container-col">
                <div>{title.toUpperCase()}</div>
                <div>{period}</div>
                <div>{role.toUpperCase()}</div>
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

const Languages = ({selectedLanguages, isMobile}) => {

    const isSelected = language => {
        return selectedLanguages.includes(language)
    }

    return (
        <li className="container-row">
            {languages.map((l, index) =>
                isMobile ? isSelected(l) ? (
                    <ul className={["language p-0 mr-1 p-1", isSelected(l) ? "language-selected" : null].join(" ")}
                        key={index}>
                        {l}
                    </ul>
                ) : null : (
                    <ul className={["language p-0 mr-1 p-1", isSelected(l) ? "language-selected" : null].join(" ")}
                        key={index}>
                        {l}
                    </ul>
                )
            )}
        </li>
    )
}


export const MenuContent = ({item, isMobile}) => {

    return (
        <div className="container container-row content-center">
            <div id="menu-content" className="container-col justify-between">
                <div className="top-content">
                    <TopContent period={item.period} title={item.title} role={item.role} company={item.company}
                                location={item.location}/>
                    <div className="mb-1">{item.description}</div>
                    <div>{item.mission}</div>
                </div>
                <div>
                    <Divider light/>
                    <KeyContent words={item.keyWords}/>
                    <Divider light/>
                    <div className="t-grey-light">Technologies</div>
                    <Languages isMobile={isMobile} selectedLanguages={item.languages}/>
                </div>
            </div>
        </div>
    );
}

export const MenuDialog = ({open, setOpen, item}) => {

    return (
        <Dialog onClose={() => setOpen(false)} aria-labelledby="simple-dialog-title" open={open}>
            <div className="p-1">
                <MenuContent item={item} isMobile={true}/>
            </div>
        </Dialog>
    )
}
