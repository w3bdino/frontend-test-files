import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import jobsReducer from './jobsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  searchInfo: searchReducer,
  jobsLists: jobsReducer,
  form: formReducer,
});

export default rootReducer;
