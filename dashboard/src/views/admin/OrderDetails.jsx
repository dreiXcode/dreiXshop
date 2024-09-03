import React from 'react';

const OrderDetails = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='flex justify-between items-center p-4'>
                    <h2 className='text-xl text-[#d0d2d6]'>Order Details</h2>
                    <select name="" id="" className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#475469] border border-slate-700 rounded-md text-[#d0d2d6]'>
                        <option value="">pending</option>
                        <option value="">processing</option>
                        <option value="">warehouse</option>
                        <option value="">placed</option>
                        <option value="">cancel</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;