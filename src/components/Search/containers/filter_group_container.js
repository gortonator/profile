import FilterGroup from '../components/filter_group'
import { connect } from 'react-redux';
import * as FilterActions from '../redux/filter_actions';

const mapStateToProps = (state) => {
    return { }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSelectedCoop: input => {
            dispatch(FilterActions.addSelectedCoop(input));
        },
        removeSelectedCoop: input => {
            dispatch(FilterActions.removeSelectedCoop(input));
        },
        addSelectedDegree: input => {
            dispatch(FilterActions.addSelectedDegree(input));
        },
        removeSelectedDegree: input => {
            dispatch(FilterActions.removeSelectedDegree(input));
        },
        addSelectedUniversity: input => {
            dispatch(FilterActions.addSelectedUniversity(input));
        },
        removeSelectedUniversity: input => {
            dispatch(FilterActions.removeSelectedUniversity(input));
        },
        addSelectedYear: input => {
            dispatch(FilterActions.addSelectedYear(input));
        },
        removeSelectedYear: input => {
            dispatch(FilterActions.removeSelectedYear(input));
        },
    };
};

const FilterGroupContainer = connect(mapStateToProps,mapDispatchToProps)(FilterGroup);
export default FilterGroupContainer;