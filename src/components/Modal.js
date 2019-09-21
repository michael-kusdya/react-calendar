import React, { Component } from 'react';
import Popup from "reactjs-popup";
import Input from './Input';

class Modal extends Component {

    closeModal = () =>         {
        this.setState({ open: false });
    }

    render() {
        return (
            <Popup
                open={props.open}
                onClose={this.closeModal}
            >
                <div className="modal">
                    <a className="close" onClick={this.closeModal}>
                      &times;
                    </a>
                    <div className="header">Title</div>
                    <div className="content">
                        <Input placeholder="Event Title" />
                        <Input placeholder="Event Location" />
                    </div>
                    <div className="actions">
                        <button className="modal_btn">Save</button>
                    </div>
                </div>
            </Popup>
        );
    }
}

export default Modal;