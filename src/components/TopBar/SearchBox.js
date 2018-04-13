import Autosuggest from 'react-autosuggest';
import React, {Component} from 'react';
import styles from './SearchBox.css';
import {bindActionCreators} from "redux";
import {searchStudent, fetchOtherProfile} from "../../actions/myProfileActions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Button} from 'react-bootstrap';

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
);

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            suggestions: this.props.SearchResult,
        };

    }

    onChange = (event, {newValue}) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({value}) => {
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

    onSuggestionSelected = (event, suggestion) => {
        let nuid = suggestion.suggestion.nuid;
        this.redirectToOtherStudentProfile(nuid);
    };

    redirectToOtherStudentProfile = (nuid) => {
        console.log("Selected student's id: " + nuid); // Change this function to redirect
        let otherProfile = {
            id: nuid,
            token: this.props.token,
            history: this.props.history,
        };
        console.log("yudong", otherProfile);
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
                    suggestions={suggestions}
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