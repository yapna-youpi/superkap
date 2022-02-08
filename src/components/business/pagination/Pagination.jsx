import React from 'react';
import Proptypes from 'prop-types'

Pagination.proptype = {
    Pagination:Proptypes.object.isRequired,
    onPageChange: Proptypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {

    const {pagination, onPageChange} = props;
    const {_page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil( _totalRows / _limit);

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }
    return (
        <div>
            <button
                disabled={ _page <= 1}
                onClick={ ()=> handlePageChange( _page - 1) }
            >
                page pecedante
            </button>
            
            <button
                disabled={ _page >= totalPages}
                onClick={ ()=> handlePageChange( _page + 1) }
            >
                page suivante
            </button>
        </div>
    );
}

export default Pagination;