import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title'>
            SERVICES I OFFER
          </h2>
          <p className='subtitle'>
            Fast paced and a planner of digital solutions and web applications supporting and maintaining a company's websites and digital products
          </p>
        </div>
        <div className='grid lg:grid-cols-3 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className='bg-secondary p-6 rounded-2xl' key={index}>
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                  {icon}
                </div>
                <h4 className='text-xl font-medium mb-2 text-center'>{name}</h4>
                <p className='text-center'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
