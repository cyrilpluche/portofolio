import React from 'react';
import PropTypes from 'prop-types';
import "./DesignName.scss"

export function DesignName({label, isEnter}) {

    return (
        <div className="design-label-container clickable">
            <div className={["design-label", isEnter ? "design-label-active" : "disabled"].join(' ')}>
                Engineer in computer science & management
            </div>
            <div className={["design-label-glow barcode mt-3", isEnter ? "letter-spacing" : "disabled"].join(' ')}>
                {label}
            </div>
        </div>
    );
}

DesignName.propTypes = {
    label: PropTypes.string,
    isEnter: PropTypes.bool,
};