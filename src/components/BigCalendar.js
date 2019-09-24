import React, { Component } from 'react';
import Modal from './Modal'
import moment from 'moment';

class BigCalendar extends Component {

    // list of days
    days = moment.weekdaysShort(); 

    state = {
        dateObject: moment(),
        openCreate: false,
        openDetail: false,
        events: []
    };

    daysInMonth = () => {
        return this.state.dateObject.daysInMonth();
      };

    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject)
                     .startOf("month")
                     .format("d"); 
       return firstDay;
    };

    showModal = (e) => {
        this.setState({ openCreate: true });
        console.log(e.currentTarget.textContent)
    }

    closeModalCreate = () => {
      this.setState({ openCreate: false });
    }

    closeModalDetail = () => {
        this.setState({ openDetail: false });
    }

    createEvent = (event) => {
        this.setState({ events: [...this.state.events, event], openCreate: false })
        console.log(this.state.events)
    }

    render() {

        let daysOfWeek = this.days.map(day => {
            return (
              <th key={day} className="week-day">
               {day}
              </th>
            );
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td>{""}</td>);
        }

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            daysInMonth.push(
                <td key={d} onClick={(e) => this.showModal(e)}>
                    {d}
                </td>
            );
        }

        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];
        
        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                // let insertRow = cells.slice();
                rows.push(cells);
            }
        });

        let dateOfMonth = rows.map((d, i) => {
            return <tr className="day">{d}</tr>;
        });

        return (
            <div>
                <table className="calendar">
                    <thead>
                      <tr className="head">{daysOfWeek}</tr>
                    </thead>
                    <tbody>{dateOfMonth}</tbody>
                </table>
                <Modal 
                    openCreate={this.state.openCreate} 
                    openDetail={this.state.openDetail} 
                    closeModalDetail={this.closeModalDetail} 
                    closeModalCreate={this.closeModalCreate} 
                    createEvent={this.createEvent} 
                />
            </div>
        );
    }
}

export default BigCalendar;