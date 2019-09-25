import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  search_keyword: '',
  total_pages: 0,
  page: 1,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_JOB:
      return {
        ...state,
        search_keyword: action.payload.search_keyword,
      };
    case actionTypes.PAGINATION_CHANGE:
      return {
        ...state,
        page: action.payload.page,
      };        
    default:
      return state;
  }
};

export default searchReducer;
