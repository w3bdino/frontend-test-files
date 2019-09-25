import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  joblists: {},
  isloading: true,
  errormessage: {},
};

const jobsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_JOBLISTS_REQUEST:
      return {
        ...state,
        isloading: true,
      }; 
    case actionTypes.FETCH_JOBLISTS_SUCCESS:
      return {
        ...state,
        joblists: action.payload,
        isloading: false,        
      };  
    case actionTypes.FETCH_JOBLISTS_FAILED:
      return {
        ...state,
        errormessage: action.payload,
        isloading: false,        
      };        
    default:
      return state;
  }
};

export default jobsReducer;
