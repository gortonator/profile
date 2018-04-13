import React from 'react';
import Autosuggest from 'react-autosuggest';


class FilterGroup extends React.Component {
	constructor(props) {
		console.log("created");
		super(props);

		console.log(props, "props");

		let checked = [];
		let suggestions = this.props.all_items;
		let displayed = this.props.displayed;
		let title = this.props.title;

		suggestions = suggestions.filter(function(e){return this.indexOf(e)<0;},displayed);

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
		console.log(newProps, "new filters 2");
		
		let displayed = newProps.displayed;
		let suggestions = newProps.all_items;

		suggestions = suggestions.filter(function(e){return this.indexOf(e)<0;},displayed);

		suggestions = suggestions.sort();

		if(this.props !== newProps){
			console.log(newProps, "new props - update");
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
		var checked = this.state.checked;
		var labels = this.state.labels;

		if(event.target.checked){
			checked.push(labels[event.target.name]);
		}
		else {
			var index = checked.indexOf(labels[event.target.name]);
			checked.splice(index, 1);
		}

		// updates state for React updates
		this.setState({
			checked: checked
		});

		var selectedItem = this.state.labels[event.target.name];

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
			case "Degree Subject":
				if(checked){
					this.props.addSelectedDegree(selectedItem);
				}
				else {
					this.props.removeSelectedDegree(selectedItem);
				}
				break;
			case "Undergraduate University":
				if(checked){
					this.props.addSelectedUniversity(selectedItem);
				}
				else {
					this.props.removeSelectedUniversity(selectedItem);
				}
				break;
			case "Year":
				if(checked){
					this.props.addSelectedYear(selectedItem);
				}
				else {
					this.props.removeSelectedYear(selectedItem);
				}
				break;
			default:
				console.log("error");
				break;
		}
	}

	getFilterItemList() {
		var size = this.state.labels.length;
		console.log(this.state, "getting items");
		var itemArr = new Array(size);

		for(var x = 0; x < size; x++){
			var checked = false;

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
			var labels = this.state.labels.slice(0);
			var checked = this.state.checked.slice(0);
			var all_suggestions = this.state.all_suggestions.slice(0);
			var index = all_suggestions.indexOf(suggestion);
			all_suggestions.splice(index, 1);
			labels.push(suggestion);
			checked.push(suggestion);

			this.toggleState(suggestion, checked);

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

		console.log(inputLength, "length");

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
		console.log(this.state, "rerender");
		var changeHandler = this.handleChange;
		var clickHandler = this.handleClick;

		var itemArr = this.getFilterItemList();

		var value = this.state.value;
		var suggestions = this.state.suggestions;

		var inputProps = {
      placeholder: 'Search for more',
      value,
      onChange: this.onChange
    };

		var addSection = (
			<a className="filter_group_title" id="addbutton" onClick={clickHandler}>+Add</a>
		);

		console.log(this.state.suggestions, "suggestions");

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

		var searchBar = (
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

		console.log(searchBar);

		console.log(itemArr, "itemArr");

		return(
			<div id="filter_group_container">
				<a className="filter_group_title">{this.state.title}</a>
				<div id="filter_contents_container"> {
					itemArr.map(function(listValue, index){
						return (
						<div className="checkBoxItem" key={index}>
								<input
								className="check-boxes"
								name={index}
								type="checkBox"
								checked={listValue.checked}
								onChange={changeHandler}
								/>
								<label className="filter_group_label"> {
									listValue.label
								}
								</label>
						</div>
						);
					})
				}
					<div className="checkBoxItem">
						{this.state.searchBar ? searchBar : addSection}
					</div>
				</div>
			</div>
		);
	}
}

class FilterItem {
	constructor(label, checked) {
		this.checked = checked;
		this.label = label;
	}
}

export default FilterGroup;
