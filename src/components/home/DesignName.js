import React from 'react';
import PropTypes from 'prop-types';
import "./DesignName.scss"

export function DesignName({label, isEnter}) {

    return (
        <div className="design-label-container">
            <div className={["design-label barcode", isEnter ? "letter-spacing" : "disabled"].join(' ')}>
                {label}
            </div>
        </div>
    );
}

DesignName.propTypes = {
    label: PropTypes.string,
    isEnter: PropTypes.bool,
};