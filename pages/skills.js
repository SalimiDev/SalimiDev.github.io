import { useState } from 'react';
import Header from '@/components/Header';
import CategoryNav from '@/components/CategoryNav';
import SkillCard from '@/components/SkillCard';
import { loadSkills, loadSoftSkills } from '@/utils/load-datas';
import { useFilteredData } from '@/hooks/useFilteredData';
import { AnimatePresence } from 'framer-motion';

const Skills = ({ skills, softSkills }) => {
    const { filteredData, tabList, activeTab, handleFilter } = useFilteredData(skills);

    console.log(softSkills);

    return (
        <section className='px-3 w-full space-y-12 mb-96'>
            <Header
                pageTitle={'My Skills'}
                pageDesc={
                    ' I design for humans to help brands grow. I combine our passion for design focused in people with advanced development technologies.'
                }
            />
            <h1 className='text-2xl lg:text-2xl font-bold text-primary-white font-lato text-center'>Technical Skills</h1>
            <CategoryNav handleFilter={handleFilter} activeTab={activeTab} tabList={tabList} />

            <AnimatePresence>
                <div className='w-full flex flex-wrap'>
                    {(filteredData || skills).map(skill => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            </AnimatePresence>
            <h1 className='text-2xl lg:text-2xl font-bold text-primary-white font-lato text-center'>Soft Skills</h1>
        </section>
    );
};

export default Skills;

export async function getStaticProps() {
    const skills = await loadSkills();
    const softSkills = await loadSoftSkills();

    return {
        props: {
            skills,
            softSkills,
        },
    };
}
