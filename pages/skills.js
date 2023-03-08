import { useState, useRef } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import CategoryNav from '@/components/CategoryNav';
import SkillCard from '@/components/SkillCard';
import { loadSkills, loadSoftSkills } from '@/utils/load-datas';
import { useFilteredData } from '@/hooks/useFilteredData';
import { AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Skills = ({ skills, softSkills }) => {
    const { filteredData, tabList, activeTab, handleFilter } = useFilteredData(skills);
    const skillsContainerRef = useRef(null);

    const scrollToPosition = () => {
        const scrollHeight = skillsContainerRef.current.scrollHeight;
        const scrollPosition = skillsContainerRef.current.scrollTop;

        skillsContainerRef.current.scrollTo({
            top: scrollPosition + 250, // Scroll to 100px from the current position
            left: 0, // Don't scroll horizontally
            behavior: 'smooth', // Add smooth scrolling animation
        });
    };

    return (
        <div className='w-full px-3 font-lato space-y-12 mb-16'>
            <Header
                pageTitle={'My Skills'}
                pageDesc={
                    ' I design for humans to help brands grow. I combine our passion for design focused in people with advanced development technologies.'
                }
            />

            <section className='space-y-7'>
                <h3>Technical Skills</h3>
                <CategoryNav handleFilter={handleFilter} activeTab={activeTab} tabList={tabList} />

                <AnimatePresence>
                    <div
                        ref={skillsContainerRef}
                        className={`w-full  flex flex-wrap overflow-y-auto scrollbar-hide ${
                            activeTab === 'All' ? 'h-[500px]' : 'h-auto'
                        }`}>
                        {(filteredData || skills).map(skill => (
                            <SkillCard key={skill.id} skill={skill} />
                        ))}
                    </div>
                </AnimatePresence>

                <button
                    onClick={scrollToPosition}
                    className='w-full flex flex-row justify-center animate-bounce dark:text-white '>
                    <FaChevronDown size={30} />
                </button>
            </section>

            <section className='space-y-7'>
                <h3 className='border-b border-grayAccent-500 pb-3'>Soft Skills</h3>
                <div className='w-full flex flex-wrap gap-10 justify-between dark:text-primary-white'>
                    {softSkills.map(({ id, title, icon, description }) => {
                        return (
                            <div key={id} className='w-full flex gap-6 md:w-[45%]'>
                                <Image src={icon} alt={`${title}`} width={70} height={70} />
                                <div className='space-y-3'>
                                    <h5>{title}</h5>
                                    <p className='text-description'>{description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
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
