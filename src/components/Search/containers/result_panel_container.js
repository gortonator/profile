import ResultPanel from '../components/result_panel'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { 
        results: state.studentFilter.results,
    }
}
const ResultPanelContainer = connect(mapStateToProps)(ResultPanel);
export default ResultPanelContainer;