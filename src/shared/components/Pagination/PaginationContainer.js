import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Pagination.scss';

export class PaginationContainer extends Component {

  handlePageClick = (data) => {
    this.props.handlePageClick({...this.props.searchInfo, page: data.selected + 1 });
  }

  render() {
    const { joblists } = this.props.jobsData;

    return (
      <div>
        <ReactPaginate
          previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
          nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={joblists.total_pages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />                
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  jobsData: state.jobsLists,
  searchInfo: state.searchInfo,  
})

const mapDispatchToProps = dispatch => {
  return {
    handlePageClick: (page) => {
      dispatch({ type: "PAGINATION_CHANGE_REQUEST", payload: page })
    },
  }     
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer)
