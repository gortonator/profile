import React from 'react';
import logo from '../../image/login_logo.png'
import {doLogin, clearLogin} from '../../actions/myProfileActions';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import '../../css/login.css';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {username: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var username = this.state.username;
        var password = this.state.password;

        switch (event.target.name) {
            case "username":
                username = event.target.value;
                break;
            case "password":
                password = event.target.value;
                break;
            default:
                break;
        }

        this.setState({
            username: username,
            password: password
        });

        event.preventDefault();
    }

    handleSubmit(event) {
        if (this.state.username.endsWith("@husky.neu.edu")) {
            this.props.doLogin({username: this.state.username, password: this.state.password, history:this.props.history})
        }
        else {
            alert("Must provide valid Husky email address");
        }

        event.preventDefault();
    }

    render() {
        // console.log("yudong login page", this.props);


        return (
            <div id="body-container">
                <div className="login-box">
                    <div className="inner-box">
                        <img style={{height:"45px", margin:"10px"}}src={logo} alt="Northeastern Align"/>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <p>Email:</p>
                                <input id="input1" type="text" name="username" value={this.state.username}
                                       onChange={this.handleChange} autoComplete="off"/>
                            </label>
                            <label>
                                <p>Password:</p>
                                <input id="input2" type="password" name="password" value={this.state.password}
                                       onChange={this.handleChange} autoComplete="off"/>
                            </label>
                            <input type="submit" value="Login"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.myProfileReducer.LoginInfo,
        StudentRecord: state.myProfileReducer.StudentRecord,
    };
}

export default withRouter(connect(mapStateToProps, {doLogin, clearLogin})(LoginForm))