import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title'>
            MY WORKS
          </h2>
          <p className='subtitle'>
            Projects I made over the course of the DICT x Uplift Bootcamp and also some random projects I made along the way.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
