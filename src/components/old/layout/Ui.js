import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {blue} from '@material-ui/core/colors';

const modalStyle = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

export function OwnTitle(props) {
    const classes = modalStyle();
    const {title} = props;


    return (
        <div>
            {title}
        </div>
    );
}

OwnTitle.propTypes = {
    title: PropTypes.string
};
