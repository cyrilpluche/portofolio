import React from 'react';
import PropTypes from 'prop-types';
import "./Navbar.scss"

function Link(props) {
    const {label} = props
    const {active} = props

    const capitalize = text => (text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase())

    return (
        <div className={["link", active ? "link-active" : null].join(' ')}>
            {capitalize(label)}
        </div>
    )
}

Link.propTypes = {
    label: PropTypes.string.isRequired,
    active: PropTypes.bool,
};

export function Navbar({navigate, pages, page, history}) {

    function handleClick(link) {
        navigate(link)
        history.push('/' + link)
    }

    function getActive(link) {
        return page === link
    }

    function getColor() {
        if (page !== "home") return "color-black"
        else return ""
    }

    return (
        <div className={["navbar-container", getColor()].join(' ')}>
            {pages.map((p, index) => (
                <div onClick={() => handleClick(p)} key={index}>
                    <Link label={p} active={getActive(p)} />
                </div>
            ))}
        </div>
    );
}

Navbar.propTypes = {
    navigate: PropTypes.func.isRequired,
    page: PropTypes.string,
    pages: PropTypes.array,
    history: PropTypes.object.isRequired,
};