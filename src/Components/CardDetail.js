import React, { Component } from "react";
import "./CardDetail.css";

class CardDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon_url: "https://api.opendota.com" + props.location.value.img,
            attribute: {
                agi: "Agility",
                str: "Strength",
                int: "Intelligence",
            },
        };
    }

    render() {
        console.log(this.props);
        return (
            <div className="Card">
                <img src={this.state.icon_url} alt={this.props.location.value.localized_name} className="Image"></img>
                <h3>{this.props.location.value.localized_name}</h3>
                <span>Primary Attribute: {this.state.attribute[this.props.location.value.primary_attr]}</span>
                <br />
                <span>Attack Type: {this.props.location.value.attack_type}</span>
                <br />
                <span>
                    Roles:{" "}
                    {this.props.location.value.roles.map((role, index) => {
                        return <span key={index}>{role}, </span>;
                    })}
                </span>
                <br />
                <span>Base Health: {this.props.location.value.base_health}</span>
                <br />
                <span>Base Health Regen: {this.props.location.value.base_health_regen}</span>
                <br />
                <span>Base Mana: {this.props.location.value.base_mana}</span>
                <br />
                <span>Base Mana Regen: {this.props.location.value.base_mana}</span>
                <br />
                <span>Base Armor: {this.props.location.value.base_armor}</span>
                <br />
                <span>
                    Base Attack: {this.props.location.value.base_attack_min} -{" "}
                    {this.props.location.value.base_attack_max}
                </span>
                <br />
                <span>Base Strength: {this.props.location.value.base_str}</span>
                <br />
                <span>Base Strength Gain: {this.props.location.value.str_gain}</span>
                <br />
                <span>Base Agility: {this.props.location.value.base_agi}</span>
                <br />
                <span>Base Agility Gain: {this.props.location.value.agi_gain}</span>
                <br />
                <span>Base Intelligence: {this.props.location.value.base_int}</span>
                <br />
                <span>Base Intelligence Gain: {this.props.location.value.int_gain}</span>
                <br />
                <span>Attack Range: {this.props.location.value.attack_range}</span>
                <br />
                {this.props.location.value.projectile_speed !== 0 ? (
                    <span>
                        Projectile Speed: {this.props.location.value.projectile_speed}
                        <br />
                    </span>
                ) : (
                    ""
                )}
                <span>Attack Rate: {this.props.location.value.attack_rate}</span>
                <br />
                <span>Move Speed: {this.props.location.value.move_speed}</span>
                <br />
                <span>Turn Rate: {this.props.location.value.turn_rate}</span>
                <br />
            </div>
        );
    }
}

export default CardDetail;
