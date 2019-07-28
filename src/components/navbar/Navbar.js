import React from 'react';
import PropTypes from 'prop-types';
import "./Navbar.scss"

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

export const Navbar = ({navigate, links, activeLink, history}) => {

    function handleClick(link) {
        navigate(link)
        history.push('/' + link.url)
    }

    const getActive = (link) => {
        return activeLink.url === link.url
    }

    return (
        <div className={["navbar-container", activeLink.navColor].join(' ')}>
            {links.map((p, index) => (
                <div onClick={() => handleClick(p)} key={index}>
                    <Link label={p.label} active={getActive(p)} />
                </div>
            ))}
        </div>
    );
}

Navbar.propTypes = {
    navigate: PropTypes.func.isRequired,
    links: PropTypes.array,
    activeLink: PropTypes.object,
    history: PropTypes.object.isRequired,
};