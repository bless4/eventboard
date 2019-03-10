import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import EventDashBoard from './App/features/event/EventDashBoard/EventDashBoard';

class App extends Component {
  render() {
    return (
      <div>
        <EventDashBoard/>
      </div>
    );
  }
}

export default App;