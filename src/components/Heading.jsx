import React from 'react';

const Heading = ({ title, subtitle }) => {
    return (
        <div className='flex flex-col w-full justify-center items-center my-12'>
            <h2 className='text-xl md:text-2xl lg:text-4xl font-thin mb-4'>{title}</h2>
            <p className='text-xs md:text-base text-gray-600 font-thin'>{subtitle}</p>
        </div>
    );
};

export default Heading;