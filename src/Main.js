import React, {Component} from 'react';
import logo from './sass/logo.svg';
import './sass/App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {MuiThemeProvider} from '@material-ui/core/styles';
import store from "./redux/store";
import theme from "./sass/theme.js";
import DashboardContainer from "./pages/Dashboard/Dashboard.container";
class Main extends Component {
  render() {

    return (

      <Provider store={store}>
        <MuiThemeProvider theme={theme}>

          <Router basename={process.env.PUBLIC_URL}>

            <Switch>

              <Route exact path={`/`} component={DashboardContainer}/>

            </Switch>

          </Router>

        </MuiThemeProvider>

      </Provider>
    );
  }
}

export default Main;
