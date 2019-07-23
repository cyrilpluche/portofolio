import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import {blue} from '@material-ui/core/colors';
import {OwnTitle} from "./Ui";

const modalStyle = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

function SimpleDialog(props) {
    const classes = modalStyle();
    const {onClose, experience, open} = props;

    function handleClose() {
        onClose();
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
            <List>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <PersonIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={experience.description.full}/>
                </ListItem>
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
    experience: PropTypes.object,
};


const styles = theme => ({
    card: {
        minWidth: 275,
        borderRadius: 0,
        boxShadow: 'none',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

class CustomCard extends React.Component {

    constructor(props) {
        super(props)

        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)

        this.state = {
            open: false
        }
    }

    handleOpen() {
        this.setState({open: true})
    }

    handleClose() {
        this.setState({open: false})
    }

    render() {
        const {classes} = this.props;
        const {experience} = this.props;
        const {open} = this.state;

        return (
            <div>
                <Card className={classes.card} onClick={this.handleOpen}>
                    <CardContent>
                        <OwnTitle title={experience.title} />
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {experience.title}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {experience.description.short}
                        </Typography>
                        <Typography variant="h5" component="h4">
                            {experience.company}
                        </Typography>
                    </CardContent>
                </Card>

                <SimpleDialog experience={experience} open={open} onClose={this.handleClose}/>
            </div>
        )
    }
}

CustomCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomCard)