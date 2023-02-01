
import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import Items from './Items';

function PaginatedItems({ itemsPerPage, items }) {

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;

        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="pagination flex flex-col gap-4">

                <Items products={ currentItems } />
                <ReactPaginate className='pages flex flex-row justify-center items-center p-2 m-2 gap-2'
                    breakLabel="..."
                    nextLabel="Next >"
                    onPageChange={ handlePageClick }
                    pageRangeDisplayed={ 5 }
                    initialPage={ 1 }
                    pageCount={ pageCount }
                    previousLabel="< Previous"
                    renderOnZeroPageCount={ null }
                    previousLinkClassName={ 'border-2 border-green-600 rounded-md p-2 hover:bg-inherit active:scale-90 hover:bg-green-600 disabled:scale-0 disabled:bg-red-500' }
                    nextLinkClassName='border-2 border-green-600 rounded-md p-2 2 hover:bg-inherit active:scale-90 hover:bg-green-600 disabled:scale-0 disabled:bg-red-500'

                    activeLinkClassName='border-2 bg-green-600 rounded-md p-2'
                />
            </div>
        </>
    );
}


export default PaginatedItems;