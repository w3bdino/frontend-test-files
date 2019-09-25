import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SpinnerHOC from '../Spinner/SpinnerHOC';
import JobListsCollection from "./JobListsCollection";

const mapStateToProps = state => ({
  isLoading: state.jobsLists.isloading,
});

const JobListsContainer = compose(
  connect(mapStateToProps),
  SpinnerHOC
)(JobListsCollection);

export default JobListsContainer;