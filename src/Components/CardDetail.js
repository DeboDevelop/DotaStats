import axios from "axios";
import React, { Component } from "react";

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
            <div className="text-white text-lg md:text-xl lg:leading-loose">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                        <div className="col-span-full mx-auto">
                            <img
                                src={this.state.img_url}
                                alt={this.state.hero.localized_name}
                                className="object-fill h-40 md:h-60 w-full m-2 border-2 border-dashed border-black  rounded-md shadow-lg"></img>
                            <h3 className="text-center text-4xl font-extrabold py-4">
                                {this.state.hero.localized_name}
                            </h3>
                        </div>
                        <div className="mx-auto bg-gray-900 border-4 rounded-2xl p-4 w-72 md:w-48 xl:w-72">
                            <p>Primary Attribute: {this.state.attribute[this.state.hero.primary_attr]}</p>
                            <p>Attack Type: {this.state.hero.attack_type}</p>
                            {this.state.hero.roles !== undefined ? (
                                <p>
                                    Roles:{" "}
                                    {this.state.hero.roles.map((role, index) => {
                                        return <span key={index}>{role}, </span>;
                                    })}
                                </p>
                            ) : (
                                " "
                            )}
                            <p>Base Health: {this.state.hero.base_health}</p>
                            <p>Base Health Regen: {this.state.hero.base_health_regen}</p>
                        </div>
                        <div className="mx-auto bg-gray-900 border-4 rounded-2xl p-4 w-72 md:w-48 xl:w-72">
                            <p>Base Mana: {this.state.hero.base_mana}</p>
                            <p>Base Mana Regen: {this.state.hero.base_mana}</p>
                            <p>Base Armor: {this.state.hero.base_armor}</p>
                            <p>
                                Base Attack: {this.state.hero.base_attack_min} - {this.state.hero.base_attack_max}
                            </p>
                            <p>Base Strength: {this.state.hero.base_str}</p>
                        </div>
                        <div className="mx-auto bg-gray-900 border-4 rounded-2xl p-4 w-72 md:w-48 xl:w-72">
                            <p>Base Strength Gain: {this.state.hero.str_gain}</p>
                            <p>Base Agility: {this.state.hero.base_agi}</p>
                            <p>Base Agility Gain: {this.state.hero.agi_gain}</p>
                            <p>Base Intelligence: {this.state.hero.base_int}</p>
                            <p>Base Intelligence Gain: {this.state.hero.int_gain}</p>
                        </div>
                        <div className="mx-auto bg-gray-900 border-4 rounded-2xl p-4 w-72 md:w-48 xl:w-72">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default CardDetail;
