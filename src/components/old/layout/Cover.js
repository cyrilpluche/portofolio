import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import './Cover.css'
import './CoverContent.js'
import {CoverContent} from "./CoverContent";

const styles = makeStyles({
    root: {
        flexGrow: 1,
        paddingBottom: '15%',
    },
});

export function Cover(props) {
    const classes = styles();
    const {experience} = props

    const [active, setActive] = React.useState(false)

    function handleClick() {
        setActive(!active)
    }

    return (
        <Grid container justify="center" className={classes.root}>
            <Grid item xs={11} sm={10} md={8} lg={6} className={["container", active ? 'active' : null].join(" ")} onClick={handleClick}>
                <div className="cover" style={{backgroundImage: `url(${experience.coverUrl})`}}/>
                <CoverContent experience={experience}/>

                <Box
                    className="inner-container"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box textAlign="center" m={1}>
                        <Typography variant="overline" className="title">
                            {experience.title}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

Cover.propTypes = {
    experience: PropTypes.object.isRequired,
};
