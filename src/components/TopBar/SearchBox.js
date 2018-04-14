import Autosuggest from 'react-autosuggest';
import React, {Component} from 'react';
import styles from './SearchBox.css';
import {bindActionCreators} from "redux";
import {searchStudent} from "../../actions/myProfileActions";
import {fetchOtherProfile} from "../../actions/otherProfileActions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Button} from 'react-bootstrap';
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

const getSuggestionValue = suggestion => suggestion.name;

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
            suggestions: [],
        };

    }

    onChange = (event, {newValue}) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({value}) => {
        this.props.searchStudent(value);
        // this.setState({
        //     suggestions: this.props.SearchResult
        // });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onSuggestionSelected = (event, suggestion) => {
        let nuid = suggestion.suggestion.nuid;
        this.redirectToOtherStudentProfile(nuid);
    };

    redirectToOtherStudentProfile = (nuid) => {
        let otherProfile = {
            id: nuid,
            token: this.props.token,
            history: this.props.history,
        };
        this.props.fetchOtherProfile(otherProfile);
    };

    render() {

        let {value, suggestions} = this.state;

        let inputProps = {
            placeholder: 'Search students...',
            value,
            onChange: this.onChange
        };


        return (
            <div>
                <Autosuggest
                    suggestions={this.props.SearchResult}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    highlightFirstSuggestion={true}
                    onSuggestionSelected={this.onSuggestionSelected}
                />
                <Button href="/search">Advance Search</Button>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.myProfileReducer.LoginInfo.token,
        SearchResult: state.myProfileReducer.SearchResult
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    searchStudent,
    fetchOtherProfile
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBox))