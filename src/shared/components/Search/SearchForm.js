import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import validate from './Validate';
import renderField from './RenderField';
import './SearchForm.scss';

const SearchForm = ({ 
  searchSubmit, 
  handleSubmit, 
  pristine, 
  reset, 
  submitting 
}) => {
  return (
    <div className='search-box'>
      <form onSubmit={handleSubmit(searchSubmit)}>
        <Field
          name="searchjob"
          type="text"
          component={renderField}
          label="Search Job Title or Company Name"
        />
        <div>
          <button className='btn' type="submit" disabled={submitting}>
            Filter Results
          </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'searchJobForm',
  validate, 
})(SearchForm)