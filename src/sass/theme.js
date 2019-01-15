import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';

// All the following keys are optional. We try our best to provide a great
// default value.
const theme = createMuiTheme({
    palette: {
        // primary: {     main: '#EAA6C1'     // main: '#ffd1c3' }, secondary: { main:
        // '#ffd1c3' }, footer: {     main: `#F5F5F5` }, secondary: "#ffd1c3",
        // secondary: deepPurple,
        tertiary: teal,
        teal: teal,
        error: red,

        // main: 'testimonialReducer17a398', primary: '#17a398', secondary: '#834BFF',
        // purple: '#834BFF', tertiary: pink, success: '#00ff00', footer: '#171219',
        // grey: '#ddd', //note common white: '#fff', black: '#000', Used by
        // `getContrastText()` to maximize the contrast between the background and the
        // text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately two indexes within its
        // tonal palette. E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2
    },

    social: {
        main: '#007bb5',
        linkedin: '#007bb5',
        google: '#db4437',
        github: '#6e5494',
        facebook: '#3b5998',
        instagram: '#c32aa3'
    }
});

export default theme;