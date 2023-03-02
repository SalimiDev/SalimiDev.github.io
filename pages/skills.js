import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import SkillCard from '@/components/SkillCard';
import { loadPosts } from '@/utils/load-skills';

const Skills = ({ skills }) => {
    return (
        <section className='px-3'>
            <Header
                pageTitle={'My Skills'}
                pageDesc={
                    ' I design for humans to help brands grow. I combine our passion for design focused in people with advanced development technologies.'
                }
            />

            <div className='space-y-4'>
                {skills.map(skill => (
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
