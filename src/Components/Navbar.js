import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    onChange(e) {
        e.preventDefault();
        this.props.changeHeroState(e.target.value);
    }
    render() {
        return (
            <div className="Navbar">
                <h1>Dota 2 Stats</h1>
                <input type="text" placeholder="Search..." onChange={this.onChange.bind(this)} />
            </div>
        );
    }
}

export default Navbar;
