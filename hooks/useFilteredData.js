import { useState, useMemo } from 'react';

export function useFilteredData(data) {
    const [filteredData, setFilteredData] = useState(data);

    const categories = useMemo(() => {
        return data.reduce((acc, item) => {
            if (!acc.includes(item.category)) {
                acc.push(item.category);
            }
            return acc;
        }, []);
    }, [data]);

    const [tabList, setTabList] = useState(['All', ...categories]);

    const handleFilter = tabName => {
        let newData;
        if (tabName === 'All') {
            newData = data;
        } else {
            newData = data.filter(item => item.category === tabName);
        }
        setFilteredData(newData);
    };

    return { filteredData, tabList, handleFilter };
}
