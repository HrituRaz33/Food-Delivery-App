import React, { useEffect, useState } from 'react';
import { IoFastFood } from "react-icons/io5"
import { categories } from '../utils/data';
import { motion } from 'framer-motion';
import RowContainer from './RowContainer';
import { UseStateValue } from '../context/StateProvider';


const MenuContainer = () => {

    const [filter, setFilter] = useState("chicken");

    const [{ foodItems }, dispatch] = UseStateValue()

    return (
        <section className='w-full my-6' id='menu'>
            <div className='w-full flex flex-col items-center justify-center'>
                <p className='text-2xl font-semibold uppercase text-gray-500 relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-8 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'>
                    Our Hot Dishes
                </p>

                <div className='w-full flex items-center justify-start lg:justify-center gap-8 mt-6 py-6 overflow-x-scroll scrollbar-none'>
                    {
                        categories && categories.map(category => (
                            <motion.div
                                whileTap={{ scale: 0.75 }}
                                key={category.id}

                                className={`group 
                                ${filter === category.urlParaName ?
                                        "bg-red-600" :
                                        "bg-white"} 
                                    bg-white hover:bg-red-600 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center`}
                                onClick={() => setFilter(category.urlParaName)}
                            >
                                <div className={`w-10 h-10 rounded-full 
                                ${filter === category.urlParaName ?
                                        "bg-white" :
                                        "bg-red-600"} 
                                 bg-white group-hover:bg-white flex items-center justify-center`}>
                                    <IoFastFood
                                        className={`${filter === category.urlParaName ? "text-gray-600" : "text-white"} group-hover:text-gray-800 text-lg`}
                                    />
                                </div>
                                <p className={`text-sm ${filter === category.urlParaName ?
                                    "text-white" :
                                    "text-gray-200"} 
                                     text-gray-600 group-hover:text-white`}>{category.name}</p>
                            </motion.div>
                        ))
                    }
                </div>

                <div className='w-full'>
                    <RowContainer
                        flag={false}
                        data={foodItems?.filter((n) => n.category == filter)} />
                </div>

            </div>
        </section >
    );
};

export default MenuContainer;