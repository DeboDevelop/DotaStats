import React, { Component } from "react";
import "./CardDetail.css";

class CardDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon_url: "https://api.opendota.com" + props.value.img,
            attribute: {
                agi: "Agility",
                str: "Strength",
                int: "Intelligence",
            },
        };
    }

    render() {
        return (
            <div className="Card">
                <img src={this.state.icon_url} alt={this.props.value.localized_name} className="Image"></img>
                <h3>{this.props.value.localized_name}</h3>
                <span>Primary Attribute: {this.state.attribute[this.props.value.primary_attr]}</span>
                <br />
                <span>Attack Type: {this.props.value.attack_type}</span>
                <br />
                <span>
                    Roles:{" "}
                    {this.props.value.roles.map((role, index) => {
                        return <span key={index}>{role}, </span>;
                    })}
                </span>
                <br />
                <span>Base Health: {this.props.value.base_health}</span>
                <br />
                <span>Base Health Regen: {this.props.value.base_health_regen}</span>
                <br />
                <span>Base Mana: {this.props.value.base_mana}</span>
                <br />
                <span>Base Mana Regen: {this.props.value.base_mana}</span>
                <br />
                <span>Base Armor: {this.props.value.base_armor}</span>
                <br />
                <span>
                    Base Attack: {this.props.value.base_attack_min} - {this.props.value.base_attack_max}
                </span>
                <br />
                <span>Base Strength: {this.props.value.base_str}</span>
                <br />
                <span>Base Strength Gain: {this.props.value.str_gain}</span>
                <br />
                <span>Base Agility: {this.props.value.base_agi}</span>
                <br />
                <span>Base Agility Gain: {this.props.value.agi_gain}</span>
                <br />
                <span>Base Intelligence: {this.props.value.base_int}</span>
                <br />
                <span>Base Intelligence Gain: {this.props.value.int_gain}</span>
                <br />
                <span>Attack Range: {this.props.value.attack_range}</span>
                <br />
                {this.props.value.projectile_speed !== 0 ? (
                    <span>
                        Projectile Speed: {this.props.value.projectile_speed}
                        <br />
                    </span>
                ) : (
                    ""
                )}
                <span>Attack Rate: {this.props.value.attack_rate}</span>
                <br />
                <span>Move Speed: {this.props.value.move_speed}</span>
                <br />
                <span>Turn Rate: {this.props.value.turn_rate}</span>
                <br />
            </div>
        );
    }
}

export default CardDetail;
