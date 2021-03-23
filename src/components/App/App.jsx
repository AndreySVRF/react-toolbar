import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import ToolbarHead from '../ToolbarHead/ToolbarHead';

import Main from '../../pages/Main';
import Equipment from '../../pages/Equipment';

import arrNav from '../../data.json';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <ToolbarHead navData={arrNav} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/equipment' component={Equipment} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
