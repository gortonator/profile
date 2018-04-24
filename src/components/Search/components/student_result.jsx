import React from 'react';
import {Card, CardActions, CardHeader, CardText, FlatButton, Avatar} from 'material-ui';

import {bindActionCreators} from "redux";

import {fetchOtherProfile} from "../../../actions/otherProfileActions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class StudentResult extends React.Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.state = {
			firstname:this.props.firstname,
			lastname:this.props.lastname,
			coop:this.props.coop,
			campus:this.props.campus,
			enroll:this.props.enroll,
			grad:this.props.grad,
			nuid:this.props.nuid
		};
	}

	redirectToOtherStudentProfile = (nuid) => {
		let otherProfile = {
			id: nuid,
			token: this.props.token,
			history: this.props.history,
		};
		this.props.fetchOtherProfile(otherProfile);
    };

    handleClick(){
    	this.redirectToOtherStudentProfile(this.state.nuid);
    }

	render() {
		let clickHandler = this.handleClick;

		let firstname = this.props.firstname;
		let lastname = this.props.lastname;
		let coop = this.props.coop.length > 0 ? this.props.coops : "No coop";
		let campus = this.props.campus;
		let enrollmentYear = this.props.enroll;
		let graduationYear = this.props.grad;

		let firstletter = firstname.substring(0,1) === null ? "*" : firstname.substring(0,1);
		let avatar = (
		<Avatar>
			{firstletter}
		</Avatar>);


		return(
			<Card
				style={{
					width: "200px",
					overflow: "hidden",
					margin: "16px"}}>
				<CardHeader
					title={firstname}
					subtitle={lastname}
					avatar={avatar}
				/>
				<CardHeader
					title={"Coop:"}
					subtitle={coop}
					style={dataFieldStyle}
				/>
				<CardHeader
					title={"Campus:"}
					subtitle={campus}
					style={dataFieldStyle}
				/>
				<CardHeader
					title={"Attended:"}
					subtitle={enrollmentYear + " - " + graduationYear}
					style={dataFieldStyle}
				/>
      			<CardActions>
      				<FlatButton 
      					style={buttonStyling}
      					label="Visit Profile"
      					onClick={clickHandler} />
      			</CardActions>
			</Card>
		);
	}
}

const buttonStyling = {
	color: '#e88d8a',
	fontFamily: '"HelveticaNeueW01-67MdCn 692710", "HelveticaNeueW01-45Ligh", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif'
}
const dataFieldStyle = {padding:"0px", marginRight:"16px", marginLeft:"16px"};

const mapStateToProps = state => {
	return {
		token: state.myProfileReducer.LoginInfo.token,
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
	fetchOtherProfile
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentResult));