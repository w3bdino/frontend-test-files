import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';

const SearchFormContainer = ({ searchJob, searchInfo }) => {

  const searchJobKeyword = (data) => {
    searchJob({...searchInfo, search_keyword: data.searchjob });
  }

  return (
    <div>
      <SearchForm searchSubmit={searchJobKeyword} />     
    </div>
  )
}

const mapStateToProps = (state) => ({
  searchInfo: state.searchInfo,
})

const mapDispatchToProps = dispatch => {
  return {
    searchJob: (search) => dispatch({ type: "SEARCH_JOB_REQUEST", payload: search }),
  }     
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer)
