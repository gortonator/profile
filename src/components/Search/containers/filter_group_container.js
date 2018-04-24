import FilterGroup from '../components/filter_group'
import { connect } from 'react-redux';
import * as FilterActions from '../redux/filter_actions';

const mapDispatchToProps = (dispatch) => {
    return {
        addSelectedCoop: input => {
            dispatch(FilterActions.addSelectedCoop(input));
        },
        removeSelectedCoop: input => {
            dispatch(FilterActions.removeSelectedCoop(input));
        },
        addSelectedCourse: input => {
            dispatch(FilterActions.addSelectedCourse(input));
        },
        removeSelectedCourse: input => {
            dispatch(FilterActions.removeSelectedCourse(input));
        },
        addSelectedCampus: input => {
            dispatch(FilterActions.addSelectedCampus(input));
        },
        removeSelectedCampus: input => {
            dispatch(FilterActions.removeSelectedCampus(input));
        },
        addSelectedGraduationYear: input => {
            dispatch(FilterActions.addSelectedGraduationYear(input));
        },
        removeSelectedGraduationYear: input => {
            dispatch(FilterActions.removeSelectedGraduationYear(input));
        },
        addSelectedEnrollmentYear: input => {
            dispatch(FilterActions.addSelectedEnrollmentYear(input));
        },
        removeSelectedEnrollmentYear: input => {
            dispatch(FilterActions.removeSelectedEnrollmentYear(input));
        },
    };
};

const FilterGroupContainer = connect(null,mapDispatchToProps)(FilterGroup);
export default FilterGroupContainer;