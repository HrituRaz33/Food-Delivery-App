import React from 'react';
import logo from "../img/logo.png"
import { MdShoppingBasket } from "react-icons/md"

const Header = () => {
    return (
        <header className='w-screen fixed z-50 p-6 px-16'>

            {/* dasktop and tablate */}
            <div className='hidden md:flex w-full p-4'>
                <div className='flex items-center gap-2'>
                    <img className='w-10 object-cover' src={logo} alt="" />
                    <p className='text-headingColor text-xl font-bold'> City</p>
                </div>

                <ul className='flex item-center items-center gap-8 ml-auto'>
                    <li className='text-base text-orange-300 hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-orange-300 hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                    <li className='text-base text-orange-300 hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                    <li className='text-base text-orange-300 hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                </ul>
                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-orange-300 hover:text-orange-600 text-2xl ml-8 cursor-pointer'></MdShoppingBasket>
                    <div className='w-6 h-6 rounded-full bg-red-600 flex items-center justify-center absolute -top-2 -right-2'>
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className='flex md:hidden w-full h-full p-4'>

            </div>
        </header>
    );
};

export default Header;