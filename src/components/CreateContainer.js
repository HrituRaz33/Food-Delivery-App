import { motion } from "framer-motion"
import React, { useState } from 'react';
import { MdFastfood } from 'react-icons/md';
import { catagories } from "../utils/data";


const CreateContainer = () => {

    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState("");
    const [price, setPrice] = useState("");
    const [catagory, setCatagory] = useState(null);
    const [imageAsset, setImageAsset] = useState(null);
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    return (
        <div className='w-full h-auto min-h-screen flex items-center justify-center'>
            <div className='w-[90%]  md:w-[75%] border border-gray-400 rounded-lg p-4 flex flex-col items-center justify-center'>
                {
                    fields && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === 'danger' ?
                                'bg-red-400 text-red-800' : 'bg-emerald-400 text-emerald-400'
                                }`}>
                            {msg}
                        </motion.p>
                    )
                }

                <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
                    <MdFastfood className='text-xl text-gray-700'></MdFastfood>
                    <input
                        className='w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-gray-500'
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Give me a title...'
                        type="text" />
                </div>

                <div className="w-full ">
                    <select
                        className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
                        onChange={(e) => setCatagory(e.target.value)}>
                        <option value="other" className="bg-white">Select Catagory</option>
                        {
                            catagories && catagories.map(item => (
                                <option key={item.id}
                                    value={item.urlParaName}
                                    className="text-base border-0 outline-none capitalize bg-white text-gray-500 ">
                                    {item.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

            </div>
        </div>
    );
};

export default CreateContainer;