import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SearchForm.scss';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <div className={`container-search ${error ? 'error' : ''} `}>
          <span className={`icon ${touched && error ? 'error' : ''} `}><FontAwesomeIcon icon={faSearch} /></span>
          <input {...input} placeholder={label} className={`search ${touched && error ? 'error' : ''} `} type={type} />
      </div>
      {touched &&
            ((error && <span className='form-error'>{error}</span>) ||
            (warning && <span className='form-warning'>{warning}</span>))}      
    </div>    

)

export default renderField;  