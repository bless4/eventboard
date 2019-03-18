import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const emptyEvent = {
  title: '',
  date: '',
  category: '',
  description: '',
  city: '',
  venue: '',
  hostedBy: '',
  hostPhotoURL:''
}

class EventForm extends Component {

  constructor (props){
    super(props);
    this.state = {
      event: emptyEvent
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
}

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedEvent !== this.props.selectedEvent) {
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      })
    }
  }

  onFormSubmit = (evt) => {
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
    } else {
      this.props.createEvent(this.state.event)
    }
    evt.preventDefault();
  }

  onInputChange = (evt) => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value
    this.setState({
      event: newEvent
    })
  }

  render() {

    const {handleCancel} = this.props;
    const {event} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name='title' onChange={this.onInputChange} value={event.title} placeholder="Event Title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name='date' onChange={this.onInputChange} value={event.date} type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>Event Category
              <select name='category' value={event.category} onChange={this.onInputChange}>
                <option value="culture">Culture</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
          </Form.Field>
          <Form.Field>
            <label>Event Description</label>
            <textarea name='description' onChange={this.onInputChange} value={event.description} placeholder="Event Description" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name='city' onChange={this.onInputChange} value={event.city} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name='venue' onChange={this.onInputChange} value={event.venue} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name='hostedBy' onChange={this.onInputChange} value={event.hostedBy} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
