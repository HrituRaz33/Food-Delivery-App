import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { motion } from "framer-motion"
import React, { useState } from 'react';
import { MdAttachMoney, MdCloudUpload, MdDelete, MdFastfood, MdFoodBank } from 'react-icons/md';
import { actionType } from "../context/Reducer";
import { UseStateValue } from "../context/StateProvider";
import { storage } from "../firebase.config";
import { categories } from "../utils/data";
import { getAllFoodItems, saveItem } from "../utils/firebaseFunction";
import Loader from "./Loader";


const CreateContainer = () => {

    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCatagory] = useState(null);
    const [imageAsset, setImageAsset] = useState(null);
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [{ foodItems }, dispatch] = UseStateValue();

    const upLoadImage = (e) => {
        setIsLoading(true);

        const imageFile = e.target.files[0];

        const storageRef = ref(storage, `Images/${Date.now()} - ${imageFile.name}`)
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        uploadTask.on("state_changed",
            (snapshot) => {
                const uoloadProgress = (snapshot.uploadBytesResumable / snapshot.totalBytes)
            },
            (error) => {
                // console.log(error);
                setFields(true);
                setMsg("Error while uploading : try Again ");
                setAlertStatus('danger')
                setTimeout(() => {
                    setFields(false)
                    setIsLoading(false)
                }, 4000)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                    setImageAsset(downloadURL)
                    setIsLoading(false)
                    setFields(true)
                    setMsg("Image Upload Successfully")
                    setAlertStatus("success")
                    setTimeout(() => {
                        setFields(false)

                    }, 4000)
                })
            })
    }

    const deleteImage = () => {
        setIsLoading(true)

        const deleteRef = ref(storage, imageAsset)
        deleteObject(deleteRef).then(() => {
            setImageAsset(null)
            setIsLoading(false)
            setFields(true)
            setMsg("Image deleted Successfully")
            setAlertStatus("success")
            setTimeout(() => {
                setFields(false)

            }, 4000)
        })
    }

    const saveDetails = () => {
        setIsLoading(true)
        try {
            if ((!title || !calories || !imageAsset || !price || !category)) {

                setFields(true);
                setMsg("Required fields can't be empty");
                setAlertStatus('danger')
                setTimeout(() => {
                    setFields(false)
                    setIsLoading(false)
                }, 4000)
            }
            else {
                const data = {
                    id: `${Date.now()}`,
                    title: title,
                    imageURL: imageAsset,
                    category: category,
                    calories: calories,
                    qty: 1,
                    price: price,
                }
                saveItem(data)
                setIsLoading(false)
                setFields(true)
                setMsg("Data uploaded Successfully")
                clearData()
                setAlertStatus("success")
                setTimeout(() => {
                    setFields(false)
                }, 4000)
            }
        } catch (error) {
            // console.log(error);
            setFields(true);
            setMsg("Error while uploading : try Again ");
            setAlertStatus('danger')
            setTimeout(() => {
                setFields(false)
                setIsLoading(false)
            }, 4000)
        }

        fetchData();
    }

    const clearData = () => {
        setTitle("")
        setImageAsset(null)
        setCalories("")
        setPrice("")
        setCatagory("Select Category")
    }

    const fetchData = async () => {
        await getAllFoodItems().then(data => {
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                foodItems: data,
            })
        })
    }

    return (
        <div className='w-full h-auto min-h-screen flex items-center justify-center mt-6'>
            <div className='w-[90%]  md:w-[75%] border border-gray-400 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
                {
                    fields && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === 'danger' ?
                                'bg-red-400 text-red-800' : 'bg-emerald-400 text-white'
                                } `}>
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
                            categories && categories.map(item => (
                                <option key={item.id}
                                    value={item.urlParaName}
                                    className="text-base border-0 outline-none capitalize bg-white text-gray-500 ">
                                    {item.name}
                                </option>
                            ))
                        }
                    </select>
                </div>


                <div className="group flex items-center justify-center flex-col border-2 border-dotted border-gray-300 w-full h-[225px] md:h-[420px] cursor-pointer rounded-lg">
                    {
                        isLoading ? <Loader /> :
                            <>
                                {
                                    !imageAsset ?
                                        <>
                                            <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                                                    <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700"></MdCloudUpload>
                                                    <p className="text-gray-500 text-3xl hover:text-gray-700">Click here to upload</p>
                                                </div>
                                                <input
                                                    type="file"
                                                    name="uploadimage"
                                                    accept="image/*"
                                                    onChange={upLoadImage}
                                                    className="w-0 h-0"
                                                />
                                            </label>
                                        </> :
                                        <>
                                            <div className="relative h-full">
                                                <img className="w-full h-full object-cover" src={imageAsset} alt="uploadedImage" />
                                                <button type="button" className="absolute bottom-3 right-3 p-2 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                                                    onClick={deleteImage}
                                                > <MdDelete className="text-white text-2xl" /> </button>
                                            </div>
                                        </>
                                }
                            </>
                    }
                </div>

                <div className="w-full flex flex-col md:flex-row items-center gap-3">
                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <MdFoodBank className="text-gray-700 text-2xl " />
                        <input
                            type="text"
                            required
                            value={calories}
                            onChange={(e) => setCalories(e.target.value)}
                            className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-gray-500"

                            placeholder="Calories"
                        />
                    </div>
                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <MdAttachMoney className="text-gray-700 text-2xl " />
                        <input
                            type="text"
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-gray-500"
                            required
                            placeholder="Calories"
                        />
                    </div>
                </div>

                <div className="flex items-center w-full">
                    <button type="button" className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
                        onClick={saveDetails}
                    >
                        save
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CreateContainer;