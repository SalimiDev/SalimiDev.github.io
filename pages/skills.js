import React, { useEffect, useState, useMemo } from 'react';
import Header from '@/components/Header';
import SkillCard from '@/components/SkillCard';
import { loadPosts } from '@/utils/load-skills';
import { useFilteredData } from '@/hooks/useFilteredData';

const Skills = ({ skills }) => {
    const { filteredData, tabList, activeTab, handleFilter } = useFilteredData(skills);

    return (
        <section className='px-3 w-full space-y-12'>
            <Header
                pageTitle={'My Skills'}
                pageDesc={
                    ' I design for humans to help brands grow. I combine our passion for design focused in people with advanced development technologies.'
                }
            />

            <nav>
                <ul className='w-full flex flex-wrap space-x-2 justify-center'>
                    {tabList.map((tabName, index) => (
                        <li
                            key={index}
                            className={`px-3 py-2 mb-3 text-primary-white  font-lato shadow-slate-900 shadow-md hover:bg-yellow-300  hover:text-primary-500 transition duration-200 cursor-pointer ${
                                activeTab === tabName ? 'bg-yellow-300 text-primary-500' : 'bg-primary-300'
                            }`}
                            onClick={() => handleFilter(tabName)}>
                            {tabName}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className=' flex flex-wrap w-full'>
                {filteredData.map(skill => (
                    <SkillCard key={skill.id} skill={skill} />
                ))}
            </div>
        </section>
    );
};

export default Skills;

export async function getStaticProps() {
    const skills = await loadPosts();

    return {
        props: {
            skills,
        },
    };
}
