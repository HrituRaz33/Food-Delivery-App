import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { motion } from 'framer-motion';
import { RiRefreshFill } from "react-icons/ri"
import { UseStateValue } from '../context/StateProvider';
import { actionType } from '../context/Reducer';
import EmptyCart from "../img/emptyCart.svg"
import CartItem from './CartItem';
import { useEffect } from 'react';
import { useState } from 'react';


const CartContainer = ({ flag }) => {

    const [{ cartShow, cartItems, user }, dispatch] = UseStateValue();

    const [tot, setTot] = useState();

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    }

    useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator, item) {
            return accumulator + item.qty * item.price;
        }, 0);
        setTot(totalPrice);
    }, [tot, flag])

    const clearCart = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: [],
        })

        localStorage.setItem("cartItems", JSON.stringify([]))
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='fixed top-0 right-0 w-full md:w-[375px] h-screen bg-white drop-shadow-md flex flex-col z-[101]'>
            <div className='w-full flex items-center justify-between p-4'>
                <motion.div
                    whileTap={{ scale: 0.75 }}
                    onClick={showCart}
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
            {
                cartItems && cartItems.length > 0 ? (
                    <div className='w-full h-full  bg-gray-900 rounded-t-[2rem] flex flex-col'>
                        <div className='w-full h-[340px] md:h-42 px-6 py-10 flex flex-col overflow-y-scroll scrollbar-none'>

                            {/* cart items */}

                            {
                                cartItems && cartItems.map((item) => (
                                    <CartItem key={item.id} item={item}></CartItem>
                                ))
                            }
                        </div>

                        {/* cart total section */}
                        <div className='w-full flex-1 bg-gray-700 rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-gray-400 text-lg'>Sub Total</p>
                                <p className='text-gray-400 text-lg'>{tot} ৳</p>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-gray-400 text-lg'>Delivery</p>
                                <p className='text-gray-400 text-lg'>{tot + 20} ৳</p>
                            </div>
                            <div className='w-full border-b border-gray-600 my-2'>
                                <div className='w-full flex items-center justify-between'>
                                    <p className='text-gray-200 text-xl font-semibold'>Total</p>
                                    <p className='text-gray-200 text-xl font-semibold'>300 ৳</p>
                                </div>
                            </div>
                            {
                                user ? (
                                    <motion.div whileTap={{ scale: 0.75 }}
                                        type="button"
                                        className='w-full text-center p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg'
                                    >
                                        Check Out
                                    </motion.div>
                                ) : (
                                    <motion.div whileTap={{ scale: 0.75 }}
                                        type="button"
                                        className='w-full text-center p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg'
                                    >
                                        Login to check out
                                    </motion.div>
                                )
                            }
                        </div>

                    </div>
                ) : (
                    <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                        <img src={EmptyCart} className="w-300" alt="" />
                        <p className='text-xl text-gray-400 font-semibold'>
                            Add some items to your cart
                        </p>
                    </div>
                )
            }

        </motion.div>
    );
};

export default CartContainer;