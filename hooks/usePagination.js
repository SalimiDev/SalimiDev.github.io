import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Custom Hook for Pagination
const usePagination = (data = [], itemsPerPage = 3) => {
    const { query, pathname, push } = useRouter();
    const page = Number(query.page);
    // State Variables
    const [currentPage, setCurrentPage] = useState(page);
    const [totalPages, setTotalPages] = useState(0);
    const [slicedData, setSlicedData] = useState([]);

    // Helper Functions
    const goToNextPage = () => {
        setCurrentPage(page => Math.min(page + 1, totalPages));
        push(`${pathname}?page=${currentPage + 1}`);
    };

    const goToPreviousPage = () => {
        setCurrentPage(page => Math.max(page - 1, 1));
        push(`${pathname}?page=${currentPage - 1}`);
    };

    const changePage = event => {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
        push(`${pathname}?page=${Number(event.target.textContent)}`);
    };

    const getPaginationGroup = () => {
        let numberList = [];
        for (let i = 0; i < totalPages; i++) {
            numberList.push(i + 1);
        }
        return numberList;
    };

    const updateData = () => {
        setTotalPages(Math.ceil(data.length / itemsPerPage));
        setSlicedData(data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
    };

    useEffect(() => {
        updateData();
    }, [page, currentPage]);

    useEffect(() => {
        setCurrentPage(page);
    }, [page]);

    return { currentPage, slicedData, totalPages, goToNextPage, goToPreviousPage, changePage, getPaginationGroup };
};

export default usePagination;
