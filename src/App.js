import React, {Component} from 'react';
import MyProfile from './components/MyProfile/MyProfile'
import OtherProfile from './components/OtherProfile/OtherProfile'
import Login from './components/Login/LoginForm'
import Search from './components/Search/Search'
import NotFound from './components/NorFound/NorFound'
import {Switch, Redirect, BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {

    render() {
        // console.log("yudong app debug", this.props.debug);
        return (
            <div>
                <Router>
                    <div id="main-nav">
                        <Switch>
                            <Route exact path="/myProfile" component={MyProfile}/>
                            <Route exact path="/otherProfile" component={OtherProfile}/>
                            <Route exact path="/search" component={Search}/>
                            <Route exact path="/" component={Login}/>
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        debug: state.myProfileReducer,
    };
}

export default connect(mapStateToProps, null)(App)