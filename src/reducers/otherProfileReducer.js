import {FETCH_OTHER_PROFILE_DATA} from '../actions/types'

export default function otherProfileReducer(state = null,
    {type, payload}) {
    switch (type) {
        case FETCH_OTHER_PROFILE_DATA:
            return {...payload, LoginInfo: {...state.LoginInfo}, SearchResult: {...state.SearchResult}};
        default:
            // console.log("not found any type match in reducer! you are given type " + type);
            return state;
    }
}
