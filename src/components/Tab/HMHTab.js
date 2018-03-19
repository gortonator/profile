import React, {Component} from 'react';
import About from "./About";
import Skill from "./Skill";

class Tab extends Component {
    constructor() {
        super();
        this.state = {
            phone: "(206)306-3178",
            email: "jeremy@gmail.com",
            address: "225 Terry Ave, Seattle, WA",
            dob: "12/11/1993",
            linkedin: "www.linkedin.com/jeremy",
            github: "www.github.com/jeremy",
            facebook: "www.facebook.com/jeremy",
            website: "www.jeremy.com/home",
            skill: "Java\nPython\nC++\nRuby"
        };
        this.changeState = this.changeState.bind(this);
    }

    changeState(key, value) {
        this.setState({
            [key]: value
        });
        console.log("change "+[key]+": "+value);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <About phone={this.state.phone}
                       email={this.state.email}
                       address={this.state.address}
                       dob={this.state.dob}
                       linkedin={this.state.linkedin}
                       github={this.state.github}
                       facebook={this.state.facebook}
                       website={this.state.website}
                       action={this.changeState}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Skill labelText="Skill" keyName="skill" action={this.changeState} value={this.state.skill}/>
            </div>
        )
    }
}

export default Tab