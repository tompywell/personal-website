import React, { Component } from 'react';
//import './App.css';
import { withStyles } from '@material-ui/core/styles';
import PersonCard from './PersonCard'
import 'typeface-roboto'
import Grid from '@material-ui/core/Grid';
import green from '@material-ui/core/colors/green'

const styles = theme => ({
  grid: {
    minHeight: "100vh",
    backgroundColor: green[200]
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="app">
        <Grid className={classes.grid} container direction="column" alignItems="center" justify="center">
          <Grid item>
            <PersonCard></PersonCard>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
