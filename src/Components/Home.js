import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
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
    searchHero = value => {
        //console.log("From Home Component: " + value);
        const searched_hero = this.state.heroes.filter(hero => {
            return hero.localized_name.startsWith(value);
        });
        this.setState({ ...this.state, current_heroes: [...searched_hero] });
    };
    render() {
        return (
            <div>
                <Navbar changeHeroState={this.searchHero} />
                <div className="mx-auto">
                    <div className="container">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                            {this.state.current_heroes.map(hero => {
                                return (
                                    <Link to={`/${hero.id}`}>
                                        <Card key={hero.id} value={hero} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
