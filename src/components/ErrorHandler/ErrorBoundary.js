import React, { Component } from 'react'

import classes from './ErrorBoundary.module.css'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1 className={classes.ErrorMessage}>Ooops, something went missing here... <br /> Please come back again later.</h1>;
        }
        return this.props.children;
    }
}