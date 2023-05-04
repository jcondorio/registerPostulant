import React from 'react'
function Register(){
    return(
        <div className='d-flex justify-constext-center align-items-center bf-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>sing-up</h2>
                <form>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type='text' placeholder='Enter Name' name='name' className='from-control rounded-0'></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='emial' className='from-control rounded-0'></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password' className='from-control rounded-0'></input>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
                    <p>johan studios</p>
                    <button className='btn btn-default border w-100 bg-light rounder-0 text-decoration-none'></button>
                    
                </form>
            </div>
        </div>
    )
}
export default register