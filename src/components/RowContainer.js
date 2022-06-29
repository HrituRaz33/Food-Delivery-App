import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';



const RowContainer = ({ flag, data }) => {

    console.log(data, "dataaaaaaaa");

    return (
        <div className={`w-ful my-12 flex items-center ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
            {
                data && data.map(item => (
                    <div key={item.id} className='w-full md:w-[340px] rounded-lg p-2 bg-white shadow-md backdrop-blur-lg  my-12 hover:drop-shadow-xl'>
                        <div className='w-full h-auto flex items-center justify-between'>
                            <motion.img
                                whileHover={{ scale: 1.2 }}
                                className='w-40 -mt-8 drop-shadow-2xl'
                                src={"https://firebasestorage.googleapis.com/v0/b/food-delivery-app-9c6ee.appspot.com/o/Images%2F1656509099889%20-%20i7.png?alt=media&token=1f24756c-be46-48b3-ad1f-e17a60149092"} alt="" />
                            <motion.div
                                whileTap={{ scale: 0.75 }}
                                className='w-8 h-8 rounded-full bg-red-700  flex items-center justify-center cursor-pointer hover:shadow-md'>
                                <MdShoppingBasket className='text-white' />
                            </motion.div>
                        </div>

                        <div className='w-full flex flex-col gap-4 items-end justify-end'>
                            <p className='text-gray-500 font-semibold text-base md:text-lg '>
                                Chocolate & Vanilla
                            </p>
                            <p className='mt-1 text-sm text-gray-500 '>
                                45 Calories
                            </p>
                            <div className='gap-8 flex items-center'>
                                <p className='text-lg text-gray-500 font-semibold'>90<span className='text-orange-500 text-2xl'>৳</span></p>
                            </div>
                        </div>


                    </div>
                ))
            }
        </div >
    );
};

export default RowContainer;