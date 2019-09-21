import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import CustomToolbar from './Toolbar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

class BigCalendar extends Component {

    constructor(){
        super();
        // const now = new Date();
        const events = [
            {
                id: 0,
                title: 'All Day Event very long title',
                allDay: true,
                start: new Date(2015, 3, 0),
                end: new Date(2015, 3, 1),
            },
            {
                id: 1,
                title: 'Long Event',
                start: new Date(2015, 3, 7),
                end: new Date(2015, 3, 10),
            },
      
            {
                id: 2,
                title: 'DTS STARTS',
                start: new Date(2016, 2, 13, 0, 0, 0),
                end: new Date(2016, 2, 20, 0, 0, 0),
            },
      
            {
                id: 3,
                title: 'DTS ENDS',
                start: new Date(2016, 10, 6, 0, 0, 0),
                end: new Date(2016, 10, 13, 0, 0, 0),
            },
        ]

          this.state = {
            name: 'React',
            events
          };
    }

    onSelectEventHandler = (slotInfo) => {
        console.log(slotInfo)
    }

    onSelectEventSlotHandler = (slotInfo) => {
        console.log(slotInfo)
    }

    render() {
        return (
            <div style={{ height: '500pt'}}>
                <Calendar
                    popup
                    selectable
                    components={{toolbar: CustomToolbar}}
                    views={['month']}
                    events={this.state.events}
                    startAccessor="start"
                    endAccessor="end"
                    components={{toolbar: CustomToolbar}}
                    defaultDate={moment().toDate()}
                    onSelectEvent={(slotInfo) => this.onSelectEventHandler(slotInfo)}
                    onSelectSlot={(slotInfo) => this.onSelectEventSlotHandler(slotInfo)}
                    localizer={localizer}
                />
            </div>
        );
    }
}

export default BigCalendar;