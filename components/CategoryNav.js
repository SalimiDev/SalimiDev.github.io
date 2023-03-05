import { useFilteredData } from '@/hooks/useFilteredData';

const CategoryNav = ({ tabList, activeTab, handleFilter }) => {
    return (
        <nav>
            <ul className='w-full flex flex-wrap space-x-2 justify-center'>
                {tabList.map((tabName, index) => (
                    <li
                        key={index}
                        className={`px-3 py-2 mb-3 text-primary-white  font-lato select-none shadow-slate-900 shadow-md hover:scale-105 hover:bg-yellow-300  hover:text-primary-500 transition duration-200 cursor-pointer ${
                            activeTab === tabName ? 'bg-yellow-300 text-primary-400' : 'bg-primary-300'
                        }`}
                        onClick={() => handleFilter(tabName)}>
                        {tabName}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default CategoryNav;
