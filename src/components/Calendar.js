import React, { Component } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navigation from './Navigation';

class Calendarc extends Component {
    state = {
      date: new Date(),
    }
   
    onChange = date => this.setState({ date })
   
    render() {
      return (
        <div>
        <Navigation titulo="Notardo"></Navigation>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
      );
    }
  }

export default Calendarc
