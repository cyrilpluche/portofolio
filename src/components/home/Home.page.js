import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import cover from '../../public/cover_home.png'

export function HomePage({label, active}) {

    const getActiveClass = (item) => (
        active ? (
            item === "top-text" ? "design-label-active color-primary-contrast" : "design-glow-active"
        ) : (
            item === "top-text" ? "disabled color-tertiary" : "disabled"
        )
    )

    return (
        <React.Fragment>
            <div className="background-container">
                <img className="home-cover" src={cover} alt="home cover"/>
            </div>
            <div className="page-container-fixed container-col content-center">
                <div className="home-title barcode">
                    Cyril Pluche
                </div>
            </div>
        </React.Fragment>
    );
}

HomePage.propTypes = {
    label: PropTypes.string,
    active: PropTypes.bool,
};

/*
<div className={["container-row content-center design-label text-l text-center", getActiveClass('top-text')].join(' ')}>
                Engineer in computer science & management
            </div>
            <div className={["container-row content-center text-center design-label-glow color-tertiary barcode mt-3", getActiveClass()].join(' ')}>
                {label}
            </div>
 */