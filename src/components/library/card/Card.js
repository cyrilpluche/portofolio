import React from 'react'
import "./Card.scss"
import PropTypes from 'prop-types';

const Card = ({title, content, links}) => {
    return (
        <div className="card">
            {title ? <div className="card-title">{title.toUpperCase()}</div> : null}
            {content.map((text, index) => (
                <div className="card-content" key={index}>{text}</div>
            ))}
            <div className="card-links">
                {links ? links.map((link, index) => (
                    <a className="card-link" href={link.url} target="_blank" rel="noopener noreferrer" key={index}>
                        <img className="card-link-icon" src={link.icon} alt={link.alt}/>
                    </a>
                )) : null}
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.array,
    links: PropTypes.array,
};

export default Card