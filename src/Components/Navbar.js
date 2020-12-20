import React, { Component } from "react";

class Navbar extends Component {
    onChange(e) {
        e.preventDefault();
        this.props.changeHeroState(e.target.value);
    }
    render() {
        return (
            <div className="h-24 md:h-12 bg-gray-900">
                <h1 className="md:float-left text-3xl m-1 text-white font-extrabold">Dota 2 Stats</h1>
                <input
                    className="md:float-right h-12 mx-1 w-60 border-2 border-gray-600 font-bold text-xl"
                    type="text"
                    placeholder="Search..."
                    onChange={this.onChange.bind(this)}
                />
            </div>
        );
    }
}

export default Navbar;
