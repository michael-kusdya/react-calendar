import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import CustomToolbar from './Toolbar'
import Popup from "reactjs-popup";
import Input from './Input';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

class BigCalendar extends Component {

    state = {
        name: 'React',
        openCreate: false,
        events: [],
        title: '',
        detail: ''
      };

    onSelectEventHandler = (slotInfo) => {
        this.setState({ openDetail: !this.state.openDetail, slotInfo: slotInfo });
        console.log(slotInfo)
    }

    openModal = (slotInfo) => {
        this.setState({ openCreate: !this.state.openCreate, slotInfo: slotInfo });
        console.log(slotInfo)
    }

    closeModal = () => {
      this.setState({ openCreate: false });
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
        this.setState({ events: [...this.state.events, event], openCreate: false })
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
                    open={this.state.openCreate}
                    onClose={this.closeModal}
                    >
                    <div className="modal">
                        <a className="close" onClick={this.closeModal}>
                            &times;
                        </a>
                        <div className="header">Create Event</div>
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
                <Popup
                    open={this.state.openDetail}
                    onClose={this.closeModal}
                    >
                    <div className="modal">
                        <a className="close" onClick={this.closeModal}>
                            &times;
                        </a>
                        <div className="header">{this.state.slotInfo ? this.state.slotInfo.title : ''}</div>
                        <div className="content">
                            <h4>Date: {this.state.slotInfo ? this.state.slotInfo.start.toLocaleDateString() : ''}</h4>
                            <h4>Detail: {this.state.slotInfo ? this.state.slotInfo.detail : ''}</h4>
                        </div>
                    </div>
                </Popup>
            </div>

        );
    }
}

export default BigCalendar;