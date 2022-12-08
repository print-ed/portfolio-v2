import React from 'react';


const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left justify-center'>
            <div className='flex flex-col text-center'>
              <h2 className='logo-letter text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative before:-top-[2rem] before:lg:block'>
                Edreyel Adora
              </h2>
              <p className='mb-4 text-accent'>
                Aspiring Freelance Web Developer
              </p>
              <hr className='mb-4 opacity-5' />
              <p className='mb-2 text-lg font-semibold'>
                Hi! my name is Edreyel Adora. Currently studying Bachelor Of Science And Information Technology and about to graduate from the DICT x Uplift MERN Stack Web Development Bootcamp.
                I am currently studying MERN stack at the moment but is planning to add some more tech stacks under my wings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
