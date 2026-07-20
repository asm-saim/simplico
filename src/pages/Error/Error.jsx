import React from 'react';
import errorImg from "../../assets/App-Error.png"

const Error = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className='text-center space-y-4'>
                <img className='mx-auto' src={errorImg} alt="" />
                <h1 className='text-5xl font-bold'>Oops! Apps Not Found.</h1>
                <button className='btn'>Go To HomePage</button>
            </div>
        </div>
    );
};

export default Error;