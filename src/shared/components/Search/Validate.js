import React from 'react';

const validate = values => {
  const errors = {}
  if (!values.searchjob) {
    errors.searchjob = 'Required'
  } else if (values.searchjob.length > 15) {
    errors.searchjob = 'Must be 15 characters or less'
  }

  return errors
}

export default validate;