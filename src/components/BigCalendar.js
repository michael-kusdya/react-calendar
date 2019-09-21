import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import CustomToolbar from './Toolbar'
import Popup from "reactjs-popup";
import Input from './Input';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

class BigCalendar extends Component {

    dummyEvents = [
        {
          allDay: false,
          end: new Date('September 10, 2019 11:13:00'),
          start: new Date('September 10, 2019 11:13:00'),
          title: 'hi',
        },
        {
          allDay: true,
          end: new Date('September 13, 2019 11:13:00'),
          start: new Date('September 13, 2019 11:13:00'),
          title: 'All Day Event',
        },
      ];

    state = {
        name: 'React',
        open: false,
        events: [],
        title: '',
        detail: ''
      };

    onSelectEventHandler = (slotInfo) => {
        console.log(slotInfo)
    }

    openModal = (slotInfo) => {
        this.setState({ open: true, slotInfo: slotInfo });
        console.log(slotInfo)
    }

    closeModal = () => {
      this.setState({ open: false });
    }

    onTitleChange = (e) => {
        this.setState({ title: e.target.value})
    }

    onDetailChange = (e) => {
        this.setState({ detail: e.target.value})
    }

    onSubmit = () => {
        let event = {
            title: this.state.title,
            detail: this.state.detail,  
            start: this.state.slotInfo.slots[0],
            end: this.state.slotInfo.slots[0]
        }
        this.setState({ events: [...this.state.events, event] })
        console.log(this.state.events)
    }

    render() {
        return (
            <div style={{ height: '500px'}}>
                <Calendar
                    popup
                    selectable
                    components={{toolbar: CustomToolbar}}
                    views={['month']}
                    events={this.state.events}
                    defaultDate={moment().toDate()}
                    onSelectEvent={(slotInfo) => this.onSelectEventHandler(slotInfo)}
                    onSelectSlot={(slotInfo) => this.openModal(slotInfo)}
                    localizer={localizer}
                />
                <Popup
                    open={this.state.open}
                    onClose={this.closeModal}
                    >
                    <div className="modal">
                        <a className="close" onClick={this.closeModal}>
                            &times;
                        </a>
                        <div className="header">Title</div>
                        <div className="content">
                            {/* <Input onChange={this.titleChange} placeholder="Event Title" />
                            <Input onChange={this.locationChange} placeholder="Event Location" /> */}
                            <input type="text" placeholder="Event Title" className="modal_input" onChange={this.onTitleChange} />
                            <input type="text" placeholder="Event Detail" className="modal_input" onChange={this.onDetailChange} />
                        </div>
                        <div className="actions">
                            <button className="modal_btn" onClick={this.onSubmit}> Save </button>
                        </div>
                    </div>
                </Popup>
            </div>

        );
    }
}

export default BigCalendar;