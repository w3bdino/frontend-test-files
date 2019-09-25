import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchPage.scss';

import Header from '../shared/components/Header';
import JobListsContainer from '../shared/components/JobLists/JobListsContainer';
import SearchFormContainer from '../shared/components/Search/SearchFormContainer';
import PaginationContainer from '../shared/components/Pagination/PaginationContainer';

class SearchPage extends Component {

  componentDidMount() {
    this.props.listJobs(this.props.searchInfo); // initial search
  }

  render() {
    return (
      <div>
        <Header />
        <SearchFormContainer />
        <JobListsContainer />
        <PaginationContainer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  jobsData: state.jobsLists,
  searchInfo: state.searchInfo,
})

const mapDispatchToProps = dispatch => {
  return {
    listJobs: (search) => dispatch({ type: "JOBLISTS_REQUEST", payload: search }),  
  }    
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
