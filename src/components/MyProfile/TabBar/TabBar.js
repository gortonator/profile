import React, {Component} from 'react';
import About from './About/About';
import Academic from './Academic/Academic';
import Experience from './ExtraExperience/ExtraExperiences';
import Project from './Project/Projects';
import Skill from './Skill/Skill';
import { Tab, Tabs } from 'react-bootstrap';

class TabBar extends Component {

    render() {
        return (
            <Tabs id="tab" className="tab nav-tabs" defaultActiveKey={1}>
                <Tab className="tab nav-tabs pane" eventKey={1} title="About">
                    <About/>
                </Tab>
                <Tab className="tab nav-tabs pane" eventKey={2} title="Academic">
                    <Academic/>
                </Tab>
                <Tab className="tab nav-tabs pane" eventKey={3} title="Experience">
                    <Experience/>
                </Tab>
                <Tab className="tab nav-tabs pane" eventKey={4} title="Project">
                    <Project/>
                </Tab>
                <Tab className="tab nav-tabs pane" eventKey={5} title="Skill">
                    <Skill/>
                </Tab>
            </Tabs>
        )
    }
}

export default TabBar