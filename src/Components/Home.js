import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./Home.css";
import Navbar from "./Navbar";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: [],
            current_heroes: [],
        };
    }
    componentWillMount() {
        axios
            .get("https://api.opendota.com/api/heroStats")
            .then(response => {
                this.setState({ heroes: response.data, current_heroes: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="Home">
                <Navbar />
                {this.state.heroes.map(hero => {
                    return (
                        <Link
                            to={{
                                pathname: `/${hero.id}`,
                                value: hero,
                            }}>
                            <Card key={hero.id} value={hero} />
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default Home;
