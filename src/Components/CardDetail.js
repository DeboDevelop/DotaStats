import axios from "axios";
import React, { Component } from "react";
import "./CardDetail.css";

class CardDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: {},
            img_url: "",
            attribute: {
                agi: "Agility",
                str: "Strength",
                int: "Intelligence",
            },
        };
    }
    componentWillMount() {
        axios
            .get("https://api.opendota.com/api/heroStats")
            .then(response => {
                for (let index = 0; index < response.data.length; index++) {
                    if (response.data[index].id === +this.props.match.params.id) {
                        this.setState({
                            ...this.state,
                            hero: { ...response.data[index] },
                            img_url: "https://api.opendota.com" + response.data[index].img,
                        });
                    }
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        console.log(this.state.hero.roles);
        return (
            <div className="Card">
                <img src={this.state.img_url} alt={this.state.hero.localized_name} className="Image"></img>
                <h3>{this.state.hero.localized_name}</h3>
                <p>Primary Attribute: {this.state.attribute[this.state.hero.primary_attr]}</p>
                <p>Attack Type: {this.state.hero.attack_type}</p>
                {this.state.hero.roles !== undefined ? (
                    <p>
                        Roles:{" "}
                        {this.state.hero.roles.map((role, index) => {
                            return <p key={index}>{role}, </p>;
                        })}
                    </p>
                ) : (
                    " "
                )}
                <p>Base Health: {this.state.hero.base_health}</p>
                <p>Base Health Regen: {this.state.hero.base_health_regen}</p>
                <p>Base Mana: {this.state.hero.base_mana}</p>
                <p>Base Mana Regen: {this.state.hero.base_mana}</p>
                <p>Base Armor: {this.state.hero.base_armor}</p>
                <p>
                    Base Attack: {this.state.hero.base_attack_min} - {this.state.hero.base_attack_max}
                </p>
                <p>Base Strength: {this.state.hero.base_str}</p>
                <p>Base Strength Gain: {this.state.hero.str_gain}</p>
                <p>Base Agility: {this.state.hero.base_agi}</p>
                <p>Base Agility Gain: {this.state.hero.agi_gain}</p>
                <p>Base Intelligence: {this.state.hero.base_int}</p>
                <p>Base Intelligence Gain: {this.state.hero.int_gain}</p>
                <p>Attack Range: {this.state.hero.attack_range}</p>
                {this.state.hero.projectile_speed !== 0 ? (
                    <p>Projectile Speed: {this.state.hero.projectile_speed}</p>
                ) : (
                    ""
                )}
                <p>Attack Rate: {this.state.hero.attack_rate}</p>
                <p>Move Speed: {this.state.hero.move_speed}</p>
                <p>Turn Rate: {this.state.hero.turn_rate}</p>
            </div>
        );
    }
}

export default CardDetail;
