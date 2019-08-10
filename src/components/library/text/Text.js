import React from 'react'
import "./Text.scss"
import PropTypes from 'prop-types';

const Title3 = ({text}) => {
    return (
        <div className="title-3">{text.toUpperCase()}</div>
    )
}

Title3.propTypes = {
    text: PropTypes.string,
};

export default Title3