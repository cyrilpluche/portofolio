import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import "./Navbar.css"
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    mr: {
        paddingRight: 16,
    },
    button: {
        margin: theme.spacing(1),
    },
    link: {
        textDecoration: 'none',
    },
    active: {
        backgroundColor: 'red',
    }

}));

const Navbar = () => {

    const classes = useStyles();

    const tabs = [
        {label: 'about me', url: '/aboutme'},
        {label: 'portofolio', url: '/portofolio'},
        {label: 'hobbies', url: '/'},
        {label: 'contact', url: '/'},
    ]

    return (
        <div>
            <AppBar position="static" color="default">
                    <Grid container justify="center" className={classes.root}>
                        {tabs.map((tab, index) => (
                            <Grid item xs={2} key={index} className="tab">
                                <Grid container justify="center">
                                    <Link className={classes.link} to={tab.url} classes={{ focused: classes.active}}>
                                        <Typography variant="overline">
                                            {tab.label}
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
            </AppBar>
        </div>
    )
}

export default Navbar;