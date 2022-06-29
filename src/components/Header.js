import React, { useState } from 'react';
import logo from "../img/logo.png"
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md"
import Avator from "../img/avatar.png"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from "../firebase.config"
import { UseStateValue } from '../context/StateProvider';
import { actionType } from '../context/Reducer';

const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = UseStateValue();

    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem("user", JSON.stringify(providerData[0]))
        }
        else {
            setIsMenu(!isMenu)
        }
    }

    const logout = () => {
        setIsMenu(false)
        localStorage.clear()

        dispatch({
            type: actionType.SET_USER,
            user: null,
        })
    }

    return (
        <header className='w-screen fixed z-50 p-3 px-4 md:px-16 bg-slate-100'>

            {/* dasktop and tablate */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img className='w-10 object-cover' src={logo} alt="" />
                    <p className='text-headingColor text-xl font-bold'> City</p>
                </Link>

                <div className='flex items-center gap-8'>
                    <motion.ul initial={{ opacity: 0, x: 400 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 400 }}
                        className='flex item-center items-center gap-8'>
                        <li className='text-base text-orange-300 hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer'
                            onClick={() => setIsMenu(false)}
                        >Home</li>
                        <li className='text-base text-orange-300 hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer'
                            onClick={() => setIsMenu(false)}
                        >Menu</li>
                        <li className='text-base text-orange-300 hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer'
                            onClick={() => setIsMenu(false)}
                        >About Us</li>
                        <li className='text-base text-orange-300 hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer'
                            onClick={() => setIsMenu(false)}
                        >Service</li>
                    </motion.ul>
                    <div className='relative flex items-center justify-center'>
                        <MdShoppingBasket className='text-orange-300 hover:text-orange-600 text-2xl cursor-pointer'></MdShoppingBasket>
                        <div className='w-6 h-6 rounded-full bg-red-600 flex items-center justify-center absolute -top-4 -right-4'>
                            <p className='text-xs text-white font-semibold'>2</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <motion.img whileTap={{ scale: 0.6 }}
                            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                            src={user ? user.photoURL : Avator}
                            alt="userprofile"
                            onClick={login}
                        />
                        {
                            isMenu && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                    className='w-40 bg-slate-100 shadow-xl rounded-lg absolute top-12 right-0  flex flex-col'>
                                    {
                                        user && user.email === "razhritu@gmail.com" && (
                                            <Link to={"/createItem"}>
                                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-orange-600 text-base'
                                                    onClick={() => setIsMenu(false)}
                                                >
                                                    New Item <MdAdd />
                                                </p>
                                            </Link>
                                        )
                                    }
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-orange-600 text-base'
                                        onClick={logout}
                                    >Logout<MdLogout /> </p>
                                </motion.div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* Mobile */}

            <div className='flex items-center justify-between md:hidden w-full h-full p-4'>

                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-orange-300 hover:text-orange-600 text-2xl cursor-pointer'></MdShoppingBasket>
                    <div className='w-6 h-6 rounded-full bg-red-600 flex items-center justify-center absolute -top-4 -right-4'>
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>

                <Link to={'/'} className='flex items-center gap-2'>
                    <img className='w-10 object-cover' src={logo} alt="" />
                    <p className='text-headingColor text-xl font-bold'> City</p>
                </Link>

                <div className='relative'>
                    <motion.img whileTap={{ scale: 0.6 }}
                        className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                        src={user ? user.photoURL : Avator}
                        alt="userprofile"
                        onClick={login}
                    />
                    {
                        isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className='w-40 bg-slate-100 shadow-xl rounded-lg absolute top-12 right-0  flex flex-col'>
                                {
                                    user && user.email === "razhritu@gmail.com" && (
                                        <Link to={"/createItem"}>
                                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-orange-600 text-base'>
                                                New Item <MdAdd />
                                            </p>
                                        </Link>
                                    )
                                }

                                <ul className='flex flex-col'>
                                    <li className='text-base text-orange-300 hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2'>Home</li>
                                    <li className='text-base text-orange-300 hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2'>Menu</li>
                                    <li className='text-base text-orange-300 hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2'>About Us</li>
                                    <li className='text-base text-orange-300 hover:text-orange-600 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2'>Service</li>
                                </ul>

                                <p className='px-4 py-2 flex items-center justify-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-orange-600 text-base'
                                    onClick={logout}
                                >Logout<MdLogout /> </p>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;