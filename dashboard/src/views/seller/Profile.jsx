import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaImages } from "react-icons/fa6";
import { FadeLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { profile_image_upload } from '../../store/Reducers/authReducer'

const Profile = () => {

    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.auth)

    const image = true
    const loader = true
    const status = 'active'

    const add_image = (e) => {
        if (e.target.files.length > 0) {
            const formData = new FormData()
            formData.append('image',e.target.files[0])
            dispatch(profile_image_upload(formData))
        }
    }

    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='w-full flex flex-wrap'>

                <div className='w-full md:w-6/12'>
                    <div className='w-full p-4 bg-[#6a5fdf] rounded-md text-[#d0d2d6]'>
                        <div className='flex justify-center items-center py-3'>
                            {
                                image?.image ? <label htmlFor="img" className='h-[150px] w-[200px] relative p-3 cursor-pointer overflow-hidden'>
                                    <img src="http://localhost:3000/images/demo.jpg" alt="" />
                                    {
                                    !loader && <div className='bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70  flex justify-center items-center z-20'>
                                        <span>
                                            <FadeLoader/>
                                        </span>

                                    </div>
                                    }

                                </label> : <label className='flex justify-center items-center flex-col h-[150px] w-[200px] cursor-pointer border border-dashed hover:border-red-500 border-[#d0d2d6] relative' htmlFor="image">
                                <span><FaImages /></span>
                                <span>Select Image</span>
                                {
                                    loader && <div className='bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70  flex justify-center items-center z-20'>
                                        <span>
                                            <FadeLoader/>
                                        </span>

                                    </div>
                                }
                            </label>
                            }
                            <input onChange={add_image} type="file" className='hidden' id='img'/>
                        </div>

                        <div className='px-0 md:px-5 py-2'>
                            <div className='flex justify-between text-sm flex-col gap-2  p-4 bg-slate-800 rounded-md relative'>
                                <span className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2'><FaEdit/></span>
                                
                                <div className='flex gap-2'>
                                    <span>Name : </span>
                                    <span>{userInfo.name}</span>
                                </div>

                                <div className='flex gap-2'>
                                    <span>Email : </span>
                                    <span>{userInfo.email}</span>
                                </div>

                                <div className='flex gap-2'>
                                    <span>Role : </span>
                                    <span>{userInfo.role}</span>
                                </div>

                                <div className='flex gap-2'>
                                    <span>Status : </span>
                                    <span>{userInfo.status}</span>
                                </div>

                                <div className='flex gap-2'>
                                    <span>Payment Account : </span>
                                    <p>
                                        {
                                            status === 'active' ? <span className='bg-red-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>{userInfo.payment}</span> : <span className='bg-blue-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>Click Active</span>
                                        }
                                    </p>
                                </div>

                            </div>                
                        </div>  

                        <div className='px-0 md:px-5 py-2'>
                            {
                                !userInfo?.shopInfo ? <form>

                                    <div className='flex flex-col w-full gap-1 mb-2'>
                                        <label htmlFor="shop">Shop Name</label>
                                        <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="text" name='shop' id='shop' placeholder='Shop Name'/>
                                    </div>  

                                    <div className='flex flex-col w-full gap-1 mb-2'>
                                        <label htmlFor="division">Division Name</label>
                                        <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="text" name='division' id='division' placeholder='Division Name'/>
                                    </div>  

                                    <div className='flex flex-col w-full gap-1 mb-2'>
                                        <label htmlFor="district">District Name</label>
                                        <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="text" name='district' id='district' placeholder='District Name'/>
                                    </div>  

                                    <div className='flex flex-col w-full gap-1 mb-2'>
                                        <label htmlFor="subDistrict">Sub District Name</label>
                                        <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="text" name='subDistrict' id='subDistrict' placeholder='Product Name'/>
                                    </div>  

                                    <div className='flex flex-col w-full gap-1 mb-2'>
                                        <label htmlFor="name">Product Name</label>
                                        <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="text" name='name' id='name' placeholder='Product Name'/>
                                    </div>  

                                    <button className='bg-red-500 hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2' >
                                        Save Changes
                                    </button>

                                </form> : <div className='flex justify-between text-sm flex-col gap-2  p-4 bg-slate-800 rounded-md relative'>
                                <span className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2'><FaEdit/></span>
                                
                                <div className='flex gap-2'>
                                    <span>Shop Name : </span>
                                    <span>dreiXshop</span>
                                </div>

                                <div className='flex gap-2'>
                                    <span>Division : </span>
                                    <span>Millwoods</span>
                                </div>

                                <div className='flex gap-2'>
                                    <span>District : </span>
                                    <span>South</span>
                                </div>

                                <div className='flex gap-2'>
                                    <span>Sub Distric : </span>
                                    <span>South One</span>
                                </div>

                                <div className='flex gap-2'>
                                    <span>Payment Account : </span>
                                    <p>
                                        {
                                            status === 'active' ? <span className='bg-green-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>Pending</span> : <span className='bg-blue-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>Click Active</span>
                                        }
                                    </p>
                                </div>

                            </div>    
                            }
                            
                        </div>

                    </div>
                </div>

                <div className='w-full md:w-6/12'>
                    <div className='w-full pl-0 md:pl-7 mt-6 md:mt-0'>
                        
                        <div className='bg-[#6a5fdf] rounded-md text-[#d0d2d6] p-4'>
                            <h2 className='text-[#d0d2d6] text-lg mb-3 font-semibold'>Change Password</h2>
                        <form>

                            <div className='flex flex-col w-full gap-1 mb-2'>
                                <label htmlFor="email">Email</label>
                                <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="email" name='email' id='email' placeholder='Email'/>
                            </div>  

                            <div className='flex flex-col w-full gap-1 mb-2'>
                                <label htmlFor="o_password">Old Password</label>
                                <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="password" name='o_password' id='o_password' placeholder='Old Password'/>
                            </div>  

                            <div className='flex flex-col w-full gap-1 mb-2'>
                                <label htmlFor="n_password">New Password</label>
                                <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="password" name='n_password' id='n_password' placeholder='New Password'/>
                            </div>    

                            <button className='bg-red-500 hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2' >
                                Save Changes
                            </button>

                            </form>
                        </div>      
                    </div>
                </div>

            </div>                      
        </div>
    );
};

export default Profile;