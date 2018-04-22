import React from 'react';
import Autosuggest from 'react-autosuggest';

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class FilterGroup extends React.Component {
	constructor(props) {
		super(props);

		let checked = this.props.selected === undefined ? [] : this.props.selected;
		let suggestions = this.props.all_items;
		let displayed = this.props.displayed;
		let title = this.props.title;

		suggestions = suggestions === undefined ? [] : suggestions.filter(function(e){return this.indexOf(e)<0;},displayed);

		this.state = {
			title: title,
			labels: displayed,
			checked: checked,
			searchBar: false,
			value: '',
			suggestions: suggestions,
			all_suggestions: suggestions
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(newProps){
		let displayed = newProps.displayed;
		let suggestions = newProps.all_items;

		suggestions = suggestions.filter(function(e){return this.indexOf(e)<0;},displayed);

		suggestions = suggestions.sort();

		if(this.props !== newProps){
			this.setState((prevState) => {
				return ({
					suggestions: suggestions,
					all_suggestions: suggestions,
					labels: displayed,
				});
			});
		}
	}

	handleClick(event) {
		if(event.target.id === "addbutton"){
			this.setState((prevState) => {
				return ({
					searchBar: !prevState.searchBar
				});
			});
		}
	}

	handleChange(event) {
		let checked = this.state.checked;
		let labels = this.state.labels;

		if(event.target.checked && checked.indexOf(labels[event.target.name]) < 0){
			checked.push(labels[event.target.name]);
		}
		else {
			let index = checked.indexOf(labels[event.target.name]);
			checked.splice(index, 1);
		}

		// updates state for React updates
		this.setState({
			checked: checked
		});

		let selectedItem = this.state.labels[event.target.name];

		this.toggleState(selectedItem, event.target.checked);
	}

	toggleState(selectedItem, checked){
		switch(this.state.title) {
			case "Coop":
				if(checked){
					this.props.addSelectedCoop(selectedItem);
				}
				else {
					this.props.removeSelectedCoop(selectedItem);
				}
				break;
			case "Courses Taken":
				if(checked){
					this.props.addSelectedCourse(selectedItem);
				}
				else {
					this.props.removeSelectedCourse(selectedItem);
				}
				break;
			case "Campus Attended":
				if(checked){
					this.props.addSelectedCampus(selectedItem);
				}
				else {
					this.props.removeSelectedCampus(selectedItem);
				}
				break;
			case "Graduation Year":
				if(checked){
					this.props.addSelectedGraduationYear(selectedItem);
				}
				else {
					this.props.removeSelectedGraduationYear(selectedItem);
				}
				break;
			case "Enrollment Year":
				if(checked){
					this.props.addSelectedEnrollmentYear(selectedItem);
				}
				else {
					this.props.removeSelectedEnrollmentYear(selectedItem);
				}
				break;
			default:
				console.log("error");
				break;
		}
	}

	getFilterItemList() {
		let size = this.state.labels.length;
		let itemArr = new Array(size);

		for(let x = 0; x < size; x++){
			let checked = false;

			if(this.state.checked.indexOf(this.state.labels[x]) > -1){
				checked = true;
			}

			itemArr[x] = new FilterItem(
				this.state.labels[x],
				checked);
		}

		return itemArr;
	}

	onChange = (event, { newValue }) => {
		this.setState({
				value: newValue
		});
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: this.getSuggestions(value)
		});
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
		this.setState({
			value: ""
		});
	};

	onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method })  => {
		this.setState((prevState) => {
			let labels = this.state.labels.slice(0);
			let checked = this.state.checked.slice(0);
			let all_suggestions = this.state.all_suggestions.slice(0);
			let index = all_suggestions.indexOf(suggestion);
			all_suggestions.splice(index, 1);
			labels.push(suggestion);

			checked.push(suggestion);
			//this.toggleState(suggestion, checked);

			return ({
				labels: labels,
				checked: checked,
				searchBar: false,
				suggestions: all_suggestions,
				all_suggestions: all_suggestions
			});
		});
	}

	getSuggestions(value) {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;
		let suggestions = this.state.all_suggestions;

		return inputLength === 0 ? suggestions : suggestions.filter(sugg =>
			sugg.toLowerCase().slice(0, inputLength) === inputValue
		);
	}

	getSuggestionValue(suggestion) {
		return suggestion.name;
	}

	shouldRenderSuggestions() {
		return true;
	}

	renderSuggestion = suggestion => (
		<div>
			{suggestion}
		</div>
	);

	render() {
		console.log(this.props, "filtergroup props");
		let changeHandler = this.handleChange;
		let clickHandler = this.handleClick;

		let itemArr = this.getFilterItemList();

		let value = this.state.value;
		let suggestions = this.state.suggestions;

		let inputProps = {
			placeholder: 'Search for more',
			value,
			onChange: this.onChange
		};

		let addSection = (
			<Button id="addbutton" color="link" onClick={clickHandler} style={addLabelStyle} >+Add</Button>
		);

		let searchBar = (
			<Autosuggest
				suggestions={suggestions}
				onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
				onSuggestionsClearRequested={this.onSuggestionsClearRequested}
				onSuggestionSelected={this.onSuggestionSelected}
				getSuggestionValue={this.getSuggestionValue}
				shouldRenderSuggestions={this.shouldRenderSuggestions}
				renderSuggestion={this.renderSuggestion}
				inputProps={inputProps}
				theme={theme}
			/>
		);

		let displayedOptions = 
		itemArr.map(function(listValue, index){
			return (
			<FormGroup check key={index}>
				<a>
					<Input
						name={index}
						type="checkbox"
						checked={listValue.checked}
						onChange={changeHandler}
					/>
					{' ' + listValue.label }
				</a>
			</FormGroup>
			);
		});

		return(
			<Form >
				<Label style={titleLabelStyle}>{this.state.title}</Label>
				{displayedOptions}
				<div className="checkBoxItem">
					{this.state.searchBar ? searchBar : addSection}
				</div>
			</Form>
		);
	}
}

class FilterItem {
	constructor(label, checked) {
		this.checked = checked;
		this.label = label;
	}
}

const addLabelStyle = {
	color: '#e88d8a',
	fontFamily: '"HelveticaNeueW01-67MdCn 692710", "HelveticaNeueW01-45Ligh", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif'
}

const titleLabelStyle = {
	textDecoration: "underline",
	fontWeight: "100"
}

//styling for autosuggest
const theme = {
	container: {
		position: 'relative'
	},
	input: {
		padding: '10px',
		margin: '5px',
		width: '-webkit-fill-available',
		fontFamily: 'Helvetica, sans-serif',
		fontSize: 12,
		border: '1px solid #aaa',
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4,
	},
	inputFocused: {
		outline: 'none'
	},
	inputOpen: {
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0
	},
	suggestionsContainer: {
		padding: '5px',
		display: 'none'
	},
	suggestionsContainerOpen: {
		display: 'block',
		position: 'absolute',
		top: 34,
		margin: '5px',
		width: '-webkit-fill-available',
		border: '1px solid #aaa',
		backgroundColor: '#fff',
		fontFamily: 'Helvetica, sans-serif',
		fontSize: 12,
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4,
		zIndex: 2
	},
	suggestionsList: {
		margin: 0,
		padding: 0,
		listStyleType: 'none',
	},
	suggestion: {
		cursor: 'pointer',
		padding: '5px 5px'
	},
	suggestionHighlighted: {
		backgroundColor: '#ddd'
	}
};

export default FilterGroup;
