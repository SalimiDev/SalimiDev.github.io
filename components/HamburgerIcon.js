import React from 'react';

const HamburgerIcon = ({ isNavOpen, setIsNavOpen }) => {
    return (
        <div className='px-2 my-auto flex  lg:hidden' >
        <button className='relative group' onClick={() => setIsNavOpen(!isNavOpen)}>
            <div className='relative flex overflow-hidden items-center justify-center rounded-full w-[38px] h-[38px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md'>
                <div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>
                    <div className={`bg-white h-[2px] w-7  ${isNavOpen&&'transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100'}`}></div>
                    <div className={`bg-white h-[2px] w-7  ${isNavOpen&&'rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75'}`}></div>
                    <div className={`bg-white h-[2px] w-7 ${ isNavOpen&&'transform transition-all duration-300 origin-left group-focus:translate-y-6'}`}></div>

                  {isNavOpen&&
                    <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12`}>
                        <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45`}></div>
                        <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45`}></div>
                    </div>}
                </div>
            </div>
        </button>
</div>
    );
};

export default HamburgerIcon;




