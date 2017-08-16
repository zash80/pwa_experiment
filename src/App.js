import React, { Component } from 'react';
import BottomNavigation from 'react-md/lib/BottomNavigations';
import { Button } from 'react-md/lib/Buttons';
import { Card, CardTitle, CardText, CardActions } from 'react-md/lib/Cards';
import { NavigationDrawer } from 'react-md/lib/NavigationDrawers';

import logo from './logo.svg';
import './App.css';

const links = [{
  label: 'Recents',
  iconChildren: 'access_time',
}, {
  label: 'Favorites',
  iconChildren: 'favorite',
}, {
  label: 'Nearby',
  iconChildren: 'place',
}];

class App extends Component {
  render() {
    return (
      <NavigationDrawer
        drawerTitle="react-md with CRA"
        toolbarTitle="Welcome to react-md"
      >
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div className="md-grid">
        <Card className="md-cell">
          <CardTitle title="Hello, World!"  />
          <CardText>
            Lorem ipsum... pretend more ...
          </CardText>
          <CardActions>
            <Button flat label="Action 1" />
            <Button flat label="Action 2" />
          </CardActions>
        </Card>
      </div>
      <BottomNavigation
        links={links}
        dynamic={false}
        onNavChange={this._setPage}
        renderNode={this._container}
      />
      </NavigationDrawer>

    );
  }
}

export default App;
