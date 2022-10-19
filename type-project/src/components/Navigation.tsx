import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='flex justify-between h-[50px] px-5 bg-gray-500 text-white items-center'>
            <span>React 2022</span>

            <span>
                <Link className='mr-2' to="/">Products</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    );
};

export default Navigation;