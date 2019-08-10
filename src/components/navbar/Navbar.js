import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "./Navbar.scss"
import {makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

export const Link = ({label, active}) => {
    return (
        <div className={["clickable link", active ? "link-active" : null].join(' ')}>
            {label.toUpperCase()}
        </div>
    )
}

Link.propTypes = {
    label: PropTypes.string.isRequired,
    active: PropTypes.bool,
};

const NavbarDialog = ({open, setOpen, selectLink, activeLink, links, getActive}) => {
    return (
            <div id="navbar-dialog" className={activeLink.background}>
                <div className="container-row-reverse">
                    <i onClick={() => setOpen(false)} className="material-icons color-light text-xxl p-1">
                        clear
                    </i>
                </div>
                <div
                    className={["page-container container-col justify-center text-center", activeLink.navColor].join(' ')}>
                    {links.map((p, index) => (
                        <div onClick={() => selectLink(p)} key={index}>
                            <Link label={p.label} active={getActive(p)}/>
                        </div>
                    ))}
                </div>
            </div>
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
                    {open ? (
                        <NavbarDialog open={open} selectLink={handleClick} activeLink={activeLink} links={links}
                                      setOpen={setOpen}
                                      getActive={getActive}/>
                    ) : null}
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