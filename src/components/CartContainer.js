import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { motion } from 'framer-motion';
import { RiRefreshFill } from "react-icons/ri"
import { BiMinus, BiPlus } from "react-icons/bi"



const CartContainer = () => {
    return (
        <div className='fixed top-0 right-0 w-full md:w-[375px] h-screen bg-white drop-shadow-md flex flex-col z-[101]'>
            <div className='w-full flex items-center justify-between p-4'>
                <motion.div
                    whileTap={{ scale: 0.75 }}
                >
                    <MdOutlineKeyboardBackspace className='text-gray-400 text-3xl cursor-pointer' />
                </motion.div>
                <motion.p
                    whileTap={{ scale: 0.75 }}
                    className='text-gray-400 text-lg font-semibold'>Cart</motion.p>
                <motion.p
                    whileTap={{ scale: 0.75 }}
                    className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-gray-400 text-base'>Clear <RiRefreshFill /> </motion.p>
            </div>
            {/* botton section */}
            <div className='w-full h-full  bg-gray-900 rounded-t-[2rem] flex flex-col'>
                <div className='w-full h-[340px] md:h-42 px-6 py-10 flex flex-col overflow-y-scroll scrollbar-none'>

                    {/* cart items */}

                    <div className='w-full p1 px-2 rounded-lg bg-gray-800 flex items-center gap-2'>
                        <img className='w-20 h-20 max-w-[60px] rounded-full object-contain' src={"https://firebasestorage.googleapis.com/v0/b/food-delivery-app-9c6ee.appspot.com/o/Images%2F1657568016926%20-%20r4.png?alt=media&token=76984c5a-3167-41df-ae7b-1baad48d5b14"} alt="" />

                        {/* name section  */}

                        <div className='flex flex-col gap-2'>
                            <p className='text-base text-gray-50'> Fride rice</p>
                            <p className='text-sm block text-gray-300 font-semibold'>400</p>
                        </div>

                        {/*  button section */}
                        <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiMinus className="text-gray-50" />
                            </motion.div>
                            <p className='w-5 h-5 rounded-sm bg-gray-800 text-gray-50 flex items-center justify-center'>1</p>
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiPlus className="text-gray-50" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* cart total section */}
                <div className='w-full flex-1 bg-gray-700 rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-400 text-lg'>Sub Total</p>
                        <p className='text-gray-400 text-lg'>200 ৳</p>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-400 text-lg'>Delivery</p>
                        <p className='text-gray-400 text-lg'>20 ৳</p>
                    </div>
                    <div className='w-full border-b border-gray-600 my-2'>
                        <div className='w-full flex items-center justify-between'>
                            <p className='text-gray-200 text-xl font-semibold'>Total</p>
                            <p className='text-gray-200 text-xl font-semibold'>300 ৳</p>
                        </div>
                    </div>
                    <motion.div whileTap={{ scale: 0.75 }}
                        type="button"
                        className='w-full text-center p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out'
                    >
                        Check Out
                    </motion.div>
                </div>

            </div>

        </div>
    );
};

export default CartContainer;