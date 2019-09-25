import React from 'react'
import { faLocationArrow, faGraduationCap, faFileContract, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './JobItem.scss';

const JobListsItem = ({ 
  job_title, 
  job_country,
  job_location,
  company_logo,
  company_name,
  salary_range_to,
  salary_range_from,
  xp_lvl,
  degree,
  job_type,
}) => {

  return (
    <div className='jobitem-container'>
      <div className='col-wrap'>
        <div className='job_title col-8'>{job_title}</div>
        <div className='salary_range col-4'>&#8369;{Math.floor(salary_range_from/1000)}K - &#8369;{Math.floor(salary_range_to/1000)}K</div>
      </div>
      <div className='col-wrap'>
        <div className='col col-6'>
          <FontAwesomeIcon icon={faLocationArrow} />
          <div className='jobdetails'>{job_location}</div>
        </div>
        <div className='col col-6'>
          <FontAwesomeIcon icon={faFileContract} />
          <div className='jobdetails'>{xp_lvl}</div>
        </div>
      </div>      
      <div className='col-wrap'>
        <div className='col col-6'>
          <FontAwesomeIcon icon={faGraduationCap} />
          <div className='jobdetails'>{degree}</div>
        </div>
        <div className='col col-6'>
          <FontAwesomeIcon icon={faClock} />
          <div className='jobdetails'>{job_type}</div>
        </div>
      </div>       
      <div className='col-wrap col-wrap-margintop'>
        <div className='col col-2'>
          <img src={company_logo} width='100%' />
        </div>
        <div className='col col-6'>
            <div className="vertical-align company_name">
            <div className='jobdetails'>{company_name}</div>
          </div>          
        </div>        
      </div>
    </div>
  )
}

export default JobListsItem
