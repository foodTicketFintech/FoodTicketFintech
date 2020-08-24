import React, { Component } from "react";
import axios from "axios";

class ResInfo extends React.Component {

    
    render() {
        return (
            <div>
                <span><h6>{this.props.menu_name}</h6></span><br />
                <span>{this.props.price} 원</span><br />
                <hr/>
            </div>
            
        );
    }
}

export default ResInfo;
