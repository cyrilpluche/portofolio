import React from 'react';
import "./Background.scss"
import PropTypes from 'prop-types';

export const Background = ({transition}) => {

    console.log(transition)

    return (
        <div className={["background", transition].join(' ')}>
            <div className="top-bg"/>
            <div className="bot-bg"/>
        </div>
    );
}

Background.propTypes = {
    transition: PropTypes.string.isRequired,
};