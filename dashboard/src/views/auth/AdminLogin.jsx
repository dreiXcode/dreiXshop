import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducer';


const AdminLogin = () => {

    const dispatch = useDispatch()
    
    const [state, setState] = useState({
        email:"",
        password: ""
    })
    
    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    
    const submit = (e) => {
        e.preventDefault()
        dispatch(admin_login(state))
        //console.log(state)
    }

    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-[350px] text-[#ffffff] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    
                    <div className='h-[7-px] flex justify-center items-center'>
                        <div className='w-[180px] h-[50px]'>
                            <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="img" />
                        </div>
                        
                    </div>

                    <form onSubmit={submit}>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="email">Email</label>
                            <input onChange={inputHandle} value={state.email} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type="text" name='email' placeholder='email' id='email' required/>

                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="password">Password</label>
                            <input onChange={inputHandle} value={state.password}  className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type="text" name='password' placeholder='password' id='name' required/>

                        </div>

                        <button className='bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Sign In</button>
                    </form>                    
                </div>
            </div>            
        </div>
    );
};

export default AdminLogin;