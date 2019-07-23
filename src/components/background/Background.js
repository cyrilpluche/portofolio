import React from 'react';
import "./Background.scss"
import PropTypes from 'prop-types';

export function Background(props) {

    const {page} = props

    function getBackground() {
        if (page === "contact") return "top-active-quarter"
        else if (page === "home") return "bot-active"
        else if (page === "portofolio") return "top-active"
    }

    return (
        <div className={["background", getBackground()].join(' ')}>
            <div className="top-bg"/>
            <div className="bot-bg"/>
        </div>
    );
}

Background.propTypes = {
    page: PropTypes.string.isRequired,
};