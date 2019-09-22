import React, { Component } from 'react';
import Popup from "reactjs-popup";
import Input from './Input';

class Modal extends Component {

    state = {
        title: '',
        detail: '',
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
            start: this.props.slotInfo.slots[0],
            end: this.props.slotInfo.slots[0]
        }
        this.props.onSubmit(event)      
    }

    render() {
        if(this.props.openCreate ){
            return ( 
                <Popup
                open={this.props.openCreate}
                onClose={this.props.closeModalCreate}
                >
                <div className="modal">
                    <a className="close" onClick={this.props.closeModalCreate}>
                      &times;
                    </a>
                    <div className="header">Create Event</div>
                    <div className="content">
                        <input type="text" placeholder="Event Title" className="modal_input" onChange={this.onTitleChange} />
                        <input type="text" placeholder="Event Detail" className="modal_input" onChange={this.onDetailChange} />
                    </div>
                    <div className="actions">
                        <button className="modal_btn" onClick={this.onSubmit}>Save</button>
                    </div>
                </div>
            </Popup>
            )
        } else if(this.props.openDetail) {
            return (
                <Popup
                open={this.props.closeModalDetail}
                onClose={this.closeModal}
            >
                    <div className="modal">
                        <a className="close" onClick={this.props.closeModalDetail}>
                            &times;
                        </a>
                        <div className="header">{this.props.slotInfo ? this.props.slotInfo.title : ''}</div>
                        <div className="content">
                            <h4>Date: {this.props.slotInfo ? this.props.slotInfo.start.toLocaleDateString() : ''}</h4>
                            <h4>Detail: {this.props.slotInfo ? this.props.slotInfo.detail : ''}</h4>
                        </div>
                    </div>
                </Popup>
            )
        } else {
            return false
        }
    }
}

export default Modal;