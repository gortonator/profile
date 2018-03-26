import React, {Component} from 'react';
import MyProfile from './components/MyProfile/MyProfile'
import OtherProfile from './components/OtherProfile/OtherProfile'
import TopBar from './components/TopBar/TopBar'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
// import {myProfileActions} from './actions/myProfileActions'
class App extends Component {

    render() {
        // console.log("app.js about= ", this.props);

        return (
            <div style={{margin:"2%"}}>
                <TopBar/>
                <Router>
                    <div id="main-nav">
                        <Route exact path="/myProfile" component={MyProfile}/>
                        <Route exact path="/otherProfile" component={OtherProfile}/>
                    </div>
                </Router>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    // summary: state.myProfileReducer.about.summary
});


const mapActionsToProps = {
    // myProfileActions: myProfileActions
};


export default connect(mapStateToProps, mapActionsToProps)(App);

