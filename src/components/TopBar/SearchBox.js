import Autosuggest from 'react-autosuggest';
import React, {Component} from 'react';
import styles from './SearchBox.css';
import {bindActionCreators} from "redux";
import {searchStudent} from "../../actions/myProfileActions";
import {connect} from "react-redux";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

const getSuggestionValue = suggestion => suggestion.name;

// const renderSuggestion = (suggestion, {query})  => (
//     <div>
//         {suggestion.name}
//     </div>
// );
function renderSuggestion(suggestion, { query }) {
    const matches = match(suggestion.name, query);
    const parts = parse(suggestion.name, matches);

    return (
        <span>
      {parts.map((part, index) => {
          const className = part.highlight ? 'react-autosuggest__suggestion-match' : null;

          return (
              <span className={className} key={index}>
            {part.text}
          </span>
          );
      })}
    </span>
    );
}
class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            suggestions: this.props.SearchResult,
        };

    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.props.searchStudent(value);
        this.setState({
            suggestions: this.props.SearchResult
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onSuggestionSelected= (event, suggestion) => {
        let nuid = suggestion.suggestion.nuid;
        this.redirectToOtherStudentProfile(nuid);
    }

    redirectToOtherStudentProfile = (nuid) => {
        console.log("Selected student's id: " + nuid); // Change this function to redirect
    }

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Search students...',
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                highlightFirstSuggestion={true}
                onSuggestionSelected={this.onSuggestionSelected}
            />

        );
    }
}

const mapStateToProps = state => {
    return {
        SearchResult: state.myProfileReducer.SearchResult
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    searchStudent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)