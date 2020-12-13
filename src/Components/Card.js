import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { icon_url: "https://api.opendota.com" + props.value.icon };
    }
    render() {
        return (
            <div className="Card_div">
                <img src={this.state.icon_url} alt={this.props.value.localized_name} className="avatar"></img>
                <h3>{this.props.value.localized_name}</h3>
                <span></span>
            </div>
        );
    }
}

export default Card;
