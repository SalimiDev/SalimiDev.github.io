import React from 'react';
import Header from '@/components/Header';
import SkillCard from '@/components/SkillCard';

const Skills = () => {
    return (
        <section className='px-3'>
            <Header
                pageTitle={'My Skills'}
                pageDesc={' I design for humans to help brands grow. I combine our passion for design focused in people with advanced development technologies.'}
            />

            <div>
    <SkillCard/>
            </div>
        </section>
    );
};

export default Skills;
