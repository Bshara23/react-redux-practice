import { combineReducers } from 'redux';

import AReducer from './objA/reducer';

export default combineReducers({
    objA: AReducer,
});
