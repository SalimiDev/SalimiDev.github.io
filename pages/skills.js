import { useState } from 'react';
import Header from '@/components/Header';
import CategoryNav from '@/components/CategoryNav';
import SkillCard from '@/components/SkillCard';
import { loadPosts } from '@/utils/load-skills';
import { useFilteredData } from '@/hooks/useFilteredData';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = ({ skills }) => {
    const { filteredData, tabList, activeTab, handleFilter } = useFilteredData(skills);

    return (
        <section className='px-3 w-full space-y-12 mb-96'>
            <Header
                pageTitle={'My Skills'}
                pageDesc={
                    ' I design for humans to help brands grow. I combine our passion for design focused in people with advanced development technologies.'
                }
            />

            <CategoryNav handleFilter={handleFilter} activeTab={activeTab} tabList={tabList} />

            <AnimatePresence>
                <div className='w-full flex flex-wrap'>
                    {(filteredData||skills).map(skill => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            </AnimatePresence>
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
