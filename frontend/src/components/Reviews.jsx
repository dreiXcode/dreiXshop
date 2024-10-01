import React from 'react';
import Ratings from './Rating';
import RatingTemp from './RatingTemp';

const Reviews = () => {
    return (
        <div className='mt-8'>
            <div className='flex gap-10 md:flex-col'>
                <div className='flex flex-col gap-2 justify-start items-start py-4'>
                    <div>
                        <span className='text-6xl font-semibold'>4.5</span>
                        <span className='text-3xl font-semibold text-slate-600'>/5</span>                        
                    </div>
                    <div className='flex text-3xl'>
                        <Ratings ratings={4.5}/>
                    </div>
                    <p className='text-sm text-slate-600'>18 Reviews</p>
                </div>
                <div className='flex gap-2 flex-col py-4'>
                    <div className='text-md flex gap-1 w-[93px]'>
                        <RatingTemp rating={5}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reviews;