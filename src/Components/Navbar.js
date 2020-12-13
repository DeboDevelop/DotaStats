import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <h1>Dota 2 Stats</h1>
                <input type="text" placeholder="Search..."></input>
            </div>
        );
    }
}

export default Navbar;
