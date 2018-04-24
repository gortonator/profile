import { connect } from 'react-redux';
import StudentFilter from '../components/student_filter'
import { setResults } from '../../../actions/searchPageActions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
	return {
		displayed: state.studentFilter,
		selected: state.filterGroup,
		token: state.myProfileReducer.LoginInfo.token,
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setResults
}, dispatch);


const StudentFilterContainer = connect(mapStateToProps, mapDispatchToProps)(StudentFilter);
export default StudentFilterContainer;