import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import CategoryNav from '@/components/CategoryNav';
import SkillCard from '@/components/SkillCard';
import { loadSkills, loadSoftSkills } from '@/utils/load-datas';
import { useFilteredData } from '@/hooks/useFilteredData';
import { AnimatePresence } from 'framer-motion';

const Skills = ({ skills, softSkills }) => {
    const { filteredData, tabList, activeTab, handleFilter } = useFilteredData(skills);

    return (
        <section className='w-full px-3 font-lato space-y-12 mb-16'>
            <Header
                pageTitle={'My Skills'}
                pageDesc={
                    ' I design for humans to help brands grow. I combine our passion for design focused in people with advanced development technologies.'
                }
            />
            <h1 className='text-2xl font-lato lg:text-2xl font-bold text-center text-primary-black dark:text-primary-white'>Technical Skills</h1>
            <CategoryNav handleFilter={handleFilter} activeTab={activeTab} tabList={tabList} />

            <AnimatePresence>
                <div className='w-full flex flex-wrap'>
                    {(filteredData || skills).map(skill => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            </AnimatePresence>

            <h1 className='text-2xl font-bold text-center pb-3 border-b text-primary-black dark:text-primary-white'>Soft Skills</h1>
            <div className='w-full flex flex-wrap gap-10 justify-between dark:text-primary-white'>
                {softSkills.map(item => {
                    return (
                        <div key={item.id} className='w-full flex gap-3 md:w-[45%]'>
                            <Image src={item.icon} alt='skill image' width={70} height={70} />
                            <div className='space-y-3'>
                                <h1 className='font-lato font-bold text-lg text-primary-black dark:text-primary-white'>{item.title}</h1>
                                <p className='font-nunito text-grayAccent-800 dark:text-primary-100'>{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
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
