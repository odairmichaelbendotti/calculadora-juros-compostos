import React from 'react';

const Card = ({ title, value }) => {
    return (
        <div className='px-4 py-2 bg-white rounded-md text-center flex items-center justify-between'>
            <p className='text-xs'>{title}</p>
            <p className='font-bold text-md'>R${value}</p>
        </div>
    );
};

export default Card;