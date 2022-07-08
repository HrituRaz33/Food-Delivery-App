import React, { useEffect, useRef } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';



const RowContainer = ({ flag, data, scrollValue }) => {
    const RowContainer = useRef();

    useEffect(() => {
        RowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue])

    return (
        <div
            ref={RowContainer}
            className={`w-ful my-12 flex items-center gap-3 scroll-smooth 
            ${flag ?
                    "overflow-x-scroll scrollbar-none" :
                    "overflow-x-hidden flex-wrap justify-center"}`}>
            {
                data && data.map(item => (
                    <div key={item.id} className='w-[300px] h-auto min-w-[300px]  md:w-[340px] md:min-w-[340px] rounded-lg p-2 bg-white shadow-md backdrop-blur-lg  my-12 hover:drop-shadow-xl flex flex-col items-center justify-between'>
                        <div className='w-full flex items-center justify-between'>
                            <motion.img
                                whileHover={{ scale: 1.2 }}
                                className='w-40 h-40 -mt-8 drop-shadow-2xl'
                                src={item?.imageURL} alt="" />
                            <motion.div
                                whileTap={{ scale: 0.75 }}
                                className='w-8 h-8 rounded-full bg-red-700  flex items-center justify-center cursor-pointer hover:shadow-md'>
                                <MdShoppingBasket className='text-white' />
                            </motion.div>
                        </div>

                        <div className='w-full flex flex-col gap-4 items-end justify-end'>
                            <p className='text-gray-500 font-semibold text-base md:text-lg '>
                                {item?.title}
                            </p>
                            <p className='mt-1 text-sm text-gray-500 '>
                                {item?.calories}
                            </p>
                            <div className='gap-8 flex items-center'>
                                <p className='text-lg text-gray-500 font-semibold'>{item?.price}<span className='text-orange-500 text-2xl'>৳</span></p>
                            </div>
                        </div>


                    </div>
                ))
            }
        </div >
    );
};

export default RowContainer;