import React, { Component } from 'react';
import {Grid} from 'semantic_ui_react'
;
class EventDashBoard extends Component {
  render() {
    return (
     <Grid>
         <Grid.Column Width={10}>
         <h2>Left Column</h2>
         </Grid.Column>   
         <Grid.Column Width={10}>
         <h2>Right Column</h2>
         </Grid.Column> 
     </Grid>
    );
  }
}

export default EventDashBoard;