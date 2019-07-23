import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import './Cover.css'

const styles = makeStyles({
    root: {
        flexGrow: 1,
    },
    title: {
        paddingBottom: '20px',
    },
    paragraph: {
        padding: '10px',
    },
    noPadding: {
        padding: 0,
    },
});

export function CoverContent(props) {
    const classes = styles();
    const {experience} = props

    return (
        <Grid container className={[classes.root, "content"].join(" ")}>
            <Grid item xs={12} sm={12} md={6} className={classes.paragraph}>
                <Box className={classes.title}>
                    <Typography variant="overline" className={classes.title}>
                        {experience.title}
                    </Typography>
                </Box>

                <Typography variant="body1" className={classes.content}>
                    {experience.description.full}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.paragraph}>
                <Box
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="space-between"
                >
                    <Typography variant="overline" className={[classes.title, classes.noPadding].join(' ')}>
                        {experience.company}
                    </Typography>
                    <img className="company-icon" src={experience.companyIcon} alt="company logo"/>
                </Box>
            </Grid>
        </Grid>
    )
}

CoverContent.propTypes = {
    experience: PropTypes.object.isRequired,
};
