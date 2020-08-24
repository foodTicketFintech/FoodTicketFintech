import React, { Component } from "react";
import axios from "axios";

class ResInfo extends React.Component {

    
    render() {
        return (
            <div>
                <span>{this.props.menu_name}</span><br />
            </div>
        );
    }
}

export default ResInfo;
