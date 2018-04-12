import React, {Component} from 'react';
import MyProfile from './components/MyProfile/MyProfile'
import OtherProfile from './components/OtherProfile/OtherProfile'
import Login from './components/Login/LoginForm'
import Search from './components/Search/Search'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {doLogin, fetchMyProfile} from "./actions/myProfileActions";

class App extends Component {

    render() {
        // console.log("app.js about= ", this.props);

        return (
            <div>
                <Router>
                    <div id="main-nav">
                        <Route exact path="/myProfile" component={MyProfile}/>
                        <Route exact path="/otherProfile" component={OtherProfile}/>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/search" component={Search}/>
                    </div>
                </Router>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
    doLogin,fetchMyProfile
}, dispatch);



export default connect(null, mapDispatchToProps)(App)