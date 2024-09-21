import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[##f3f6fa]'>
            <div className='w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6'>
                
                <div className='w-3/12 lg:w-4/12 sm:w-full'>
                    <div className='flex flex-col gap-3'>
                        <img className='w-[190px] h-[70px]' src="http://localhost:3000/images/logo.png" alt="logo" />
                        <ul className='flex flex-col gap-2 text-slate-600'>
                            <li>Address : P.O. Box 887 2508 Dolor. Av. Muskegon KY 12482</li>
                            <li>Phone : +(234) 935 9395</li>
                            <li>Email : support@dreixcode.com</li>
                        </ul>
                    </div>
                </div>

                <div className='w-5/12 lg:w-8/12 sm:w-full'>
                    
                </div>

            </div>

        </footer>
    );
};

export default Footer;