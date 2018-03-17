import React, {Component} from 'react';
import TopBar from './components/TopBar/TopBar'
import Picture from './components/Picture/Picture'
import Intro from './components/Intro/Intro'
import Coop from './components/Coop/Coop'
import Tab from './components/Tab/Tab'
import {Grid, Row, Col, css} from 'react-bootstrap';


class App extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                    <Row className="show-grid" style={{margin:"2%"}}>
                        <Col md={4}>
                            <Picture/>
                        </Col>
                        <Col md={8}>
                            <Intro/>
                        </Col>
                    </Row>
                    <Row className="show-grid" style={{margin:"2%"}}>
                        <Col md={4}>
                            <Coop/>
                        </Col>
                        <Col md={8}>
                            <Tab/>
                        </Col>
                    </Row>
            </div>
        );
    }
}

export default App;
