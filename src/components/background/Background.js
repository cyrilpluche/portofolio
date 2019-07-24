import React from 'react';
import "./Background.scss"
import PropTypes from 'prop-types';

export const Background = ({background}) => {

    return (
        <div className={["background", background].join(' ')}>
            <div className="top-bg"/>
            <div className="bot-bg"/>
        </div>
    );
}

Background.propTypes = {
    background: PropTypes.string.isRequired,
};