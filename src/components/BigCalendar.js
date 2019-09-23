import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import CustomToolbar from './Toolbar'
import Modal from './Modal'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

class BigCalendar extends Component {

    state = {
        slotInfo: '',
        openCreate: false,
        openDetail: false,
        events: []
      };

    onSelectEventHandler = (slotInfo) => {
        this.setState({ openDetail: true, slotInfo: slotInfo });
    }

    onSelectSlotHandler = (slotInfo) => {
        this.setState({ openCreate: true, slotInfo: slotInfo });
    }

    closeModalCreate = () => {
      this.setState({ openCreate: false });
    }

    closeModalDetail = () => {
        this.setState({ openDetail: false });
      }

    createEvent = (event) => {
        this.setState({ events: [...this.state.events, event], openCreate: false })
    }

    render() {
        return (
            <div style={{ height: '500px'}}>
                <Calendar
                    popup
                    selectable
                    components={{toolbar: CustomToolbar}}
                    events={this.state.events}
                    defaultDate={moment().toDate()}
                    onSelectEvent={(slotInfo) => this.onSelectEventHandler(slotInfo)}
                    onSelectSlot={(slotInfo) => this.onSelectSlotHandler(slotInfo)}
                    localizer={localizer}
                />
                <Modal 
                    openCreate={this.state.openCreate} 
                    openDetail={this.state.openDetail} 
                    slotInfo={this.state.slotInfo} 
                    closeModalDetail={this.closeModalDetail} 
                    closeModalCreate={this.closeModalCreate} 
                    createEvent={this.createEvent} 
                />
            </div>

        );
    }
}

export default BigCalendar;