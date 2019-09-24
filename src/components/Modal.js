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
            detail: this.state.detail
        }
        this.props.createEvent(event)      
    }

    render() {
        
        let { openCreate, openDetail, closeModalCreate, closeModalDetail } = this.props

        if(openCreate ){
            return ( 
                <Popup
                    open={openCreate}
                    onClose={closeModalCreate}
                >
                    <div className="modal">
                        <a className="close" onClick={closeModalCreate} href="/#">
                          &times;
                        </a>
                        <div className="header">Create Event</div>
                        <div className="content">
                            <Input placeholder="Event Title" onChange={this.onTitleChange} />
                            <Input placeholder="Event Detail" onChange={this.onDetailChange} />
                        </div>
                        <div className="actions">
                            <button className="modal_btn" onClick={this.onSubmit}>Save</button>
                        </div>
                    </div>
                </Popup>
            )
        } else if(openDetail) {
            return (
                <Popup
                    open={openDetail}
                    onClose={closeModalDetail}
                >
                    <div className="modal">
                        <a className="close" onClick={closeModalDetail} href="/#">
                            &times;
                        </a>
                        <div className="header"></div>
                        <div className="content">
                            <h4>Date: </h4>
                            <h4>Detail: </h4>
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