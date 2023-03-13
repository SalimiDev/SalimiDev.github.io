import { useState, useEffect } from 'react';

// Custom Hook for Pagination
const usePagination = (data = [], itemsPerPage = 3) => {
    // State Variables
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [slicedData, setSlicedData] = useState([]);

    // Helper Functions
    const goToNextPage = () => {
        setCurrentPage(page => Math.min(page + 1, totalPages));
    };

    const goToPreviousPage = () => {
        setCurrentPage(page => Math.max(page - 1, 1));
    };

    const changePage = event => {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
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
    }, [currentPage]);

    return { currentPage, slicedData, totalPages, goToNextPage, goToPreviousPage, changePage, getPaginationGroup };
};

export default usePagination;
