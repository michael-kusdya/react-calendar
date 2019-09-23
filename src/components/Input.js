import React from 'react';

function Input(props) {
    return (
        <input type="text" placeholder={props.placeholder} className="modal_input" onChange={props.onChange} />
    )
  }

export default Input;
