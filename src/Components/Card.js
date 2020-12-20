import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { icon_url: "https://api.opendota.com" + props.value.icon };
    }
    render() {
        return (
            <div className="m-4 w-48 h-60 bg-gray-500 hover:bg-gray-600 shadow-lg flex flex-col border-black border-2 rounded-md">
                <img
                    src={this.state.icon_url}
                    alt={this.props.value.localized_name}
                    className="w-24 h-24 self-center my-auto"></img>
                <h3 className="self-center my-auto text-xl font-bold">{this.props.value.localized_name}</h3>
                <span></span>
            </div>
        );
    }
}

export default Card;
