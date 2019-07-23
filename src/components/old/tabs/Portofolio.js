import React from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {experiences} from '../../../data/Portofolio'
import {Cover} from '../layout/Cover'

const styles = theme => ({
    root: {
        height: 2000,
        backgroundColor: '#f1f1f1',
        flexGrow: 1,
        paddingTop: theme.spacing(10),
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
});

class Portofolio extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <Grid container className={classes.root}>

                {experiences.map((item, index) => (
                    <Cover experience={item} key={index}/>
                ))}

            </Grid>

        )
    }
}

Portofolio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portofolio);