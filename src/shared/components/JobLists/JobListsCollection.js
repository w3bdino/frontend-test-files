import React from 'react';
import { connect } from 'react-redux';
import JobListsItem from '../JobItem/JobItem';
import './JobListsCollection.scss';

const JobListsCollection = ({ jobsData }) => {
  const { joblists } = jobsData;
  console.log(jobsData);
  return (
    <div>
      <div className='search_results_num'>{joblists.total_num} Jobs Found</div>
      {joblists.jobs.map((jobsItem) => (
        <JobListsItem key={jobsItem.id} {...jobsItem} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  jobsData: state.jobsLists,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(JobListsCollection)
