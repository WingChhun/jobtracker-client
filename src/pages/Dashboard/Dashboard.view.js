import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({root: {}})

class DashboardView extends Component {
    constructor(props)
    {
        super(props);

        this.state = {}
    }

    componentWillReceiveProps = props => {}

    render()
    {

        const {classes} = this.props;

        return (
            <div className={classes.root}>

                <h1>
                    Landing Page View</h1>

            </div>
        )
    }
}

export default withStyles(styles)(DashboardView);