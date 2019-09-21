import React, { Component } from 'react';


class CustomToolbar extends Component {

    render() {
        let { localizer: { messages }, label } = this.props;
        return(

            <div className="rbc-toolbar">
                <h3 className="rbc-toolbar-label">{label}</h3>
            </div>
        )
    }
}

export default CustomToolbar