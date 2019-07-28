import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "./Navbar.scss"
import {makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

export const Link = ({label, active}) => {

    const capitalize = text => (text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase())

    return (
        <div className={["clickable link", active ? "link-active" : null].join(' ')}>
            {capitalize(label)}
        </div>
    )
}

Link.propTypes = {
    label: PropTypes.string.isRequired,
    active: PropTypes.bool,
};

const NavbarDialog = ({open, setOpen, selectLink, activeLink, links, getActive}) => {
    return (
        <Dialog fullScreen open={open}>
            <div className={["index", activeLink.background].join(" ")}>
                <div className="container-row-reverse">
                    <i onClick={() => setOpen(false)} className="material-icons color-light text-xxl p-1">
                        clear
                    </i>
                </div>
                <div
                    className={["page-container container-col justify-center", activeLink.navColor].join(' ')}>
                    {links.map((p, index) => (
                        <div onClick={() => selectLink(p)} key={index}>
                            <Link label={p.label} active={getActive(p)}/>
                        </div>
                    ))}
                </div>
            </div>
        </Dialog>
    )
}

export const Navbar = ({isMobile, navigate, links, activeLink, history}) => {

    const [open, setOpen] = useState(false);

    const handleClick = link => {
        navigate(link)
        history.push('/' + link.url)

        if (isMobile) setOpen(false)
    }

    const getActive = (link) => {
        return activeLink.url === link.url
    }


    return (
        <div className={["container-row-reverse", activeLink.navColor].join(' ')}>
            {isMobile ? (
                <React.Fragment>
                    <i onClick={() => setOpen(true)} className="material-icons text-xxl p-1">
                        menu
                    </i>
                    <NavbarDialog open={open} selectLink={handleClick} activeLink={activeLink} links={links}
                                  setOpen={setOpen}
                                  getActive={getActive}/>
                </React.Fragment>
            ) : (
                <div className={["container-row justify-end", activeLink.navColor].join(' ')}>
                    {links.map((p, index) => (
                        <div onClick={() => handleClick(p)} key={index}>
                            <Link label={p.label} active={getActive(p)}/>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
}

Navbar.propTypes = {
    navigate: PropTypes.func.isRequired,
    links: PropTypes.array,
    activeLink: PropTypes.object,
    history: PropTypes.object.isRequired,
};