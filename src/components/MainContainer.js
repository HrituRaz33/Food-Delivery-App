import React from 'react';
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { UseStateValue } from '../context/StateProvider';

const MainContainer = () => {

    const [{ foodItems }, dispatch] = UseStateValue();

    console.log(foodItems, "folllll");

    return (
        <div className='h-auto flex flex-col mt-10 items-center justify-center'>
            <HomeContainer></HomeContainer>


            <section className='w-full my-6'>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-2xl font-semibold uppercase text-gray-500 relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'>
                        Our fresh & Healthy fruits
                    </p>

                    <div className='hidden md:flex gap-3 items-center'>
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'>
                            <MdChevronLeft className='text-lg text-white ' />
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'>
                            <MdChevronRight className='text-lg text-white ' />
                        </motion.div>
                    </div>

                </div>

                <RowContainer flag={true} data={foodItems?.filter(n => n.category === "fruits")}></RowContainer>

            </section >
        </div >
    );
};

export default MainContainer;