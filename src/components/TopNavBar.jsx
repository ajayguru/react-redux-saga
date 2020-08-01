import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

const TopNavBar = ({ history }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <MenuItem onClick={() => history.push('/')}>Flights</MenuItem>
            </AppBar>
        </div>
    );
};

TopNavBar.propTypes = {
  history: PropTypes.shape({}).isRequired
};

export default withRouter(TopNavBar);
