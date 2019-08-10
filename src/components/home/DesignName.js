import React from 'react';
import PropTypes from 'prop-types';
import "./DesignName.scss"
import cover from '../../public/cover_home.png'

export function DesignName({label, active}) {

    const getActiveClass = (item) => (
        active ? (
            item === "top-text" ? "design-label-active color-primary-contrast" : "design-glow-active"
        ) : (
            item === "top-text" ? "disabled color-tertiary" : "disabled"
        )
    )

    return (
        <div className="container container-col content-center clickable scroll-hidden">
            <div className={["container-row content-center design-label text-l text-center", getActiveClass('top-text')].join(' ')}>
                Engineer in computer science & management
            </div>
            <div className={["container-row content-center text-center design-label-glow color-tertiary barcode mt-3", getActiveClass()].join(' ')}>
                {label}
            </div>
        </div>
    );
}

DesignName.propTypes = {
    label: PropTypes.string,
    active: PropTypes.bool,
};
