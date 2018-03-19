import React, {Component} from 'react';
import About from './About/About';
import Academic from './Academic/Academic';
import Experience from './Experience/Experience';
import { Tab, Tabs } from 'react-bootstrap';
import styled from 'styled-components'

class TabBar extends Component {

    render() {
        return (
                <Tabs defaultActiveKey={2}>
                    <Tab eventKey={1} title="About">
                        <About/>
                    </Tab>
                    <Tab eventKey={2} title="Academic">
                        <Academic/>
                    </Tab>
                    <Tab eventKey={3} title="Experience">
                        <Experience/>
                    </Tab>
                </Tabs>
        )
    }
}

export default TabBar