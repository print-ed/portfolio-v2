import React from 'react';

// import banner image
import ImageHero from '../assets/img/Banner.png';

// import resume
import resume from '../assets/resume.pdf'

const Hero = () => {
  return (
    <section id='home' className='lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              An Aspiring <br /> Web Developer.
            </h1>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              <a href={resume} download>Download CV</a>
            </button>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={ImageHero} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
