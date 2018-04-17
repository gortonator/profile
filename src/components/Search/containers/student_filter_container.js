import { connect } from 'react-redux';
import StudentFilter from '../components/student_filter'
import {setResults} from '../../../actions/searchPageActions';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => {
	return {
		displayed: state.studentFilter,
		selected: state.filterGroup
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setResults
}, dispatch);


const StudentFilterContainer = connect(mapStateToProps)(StudentFilter);
export default StudentFilterContainer;