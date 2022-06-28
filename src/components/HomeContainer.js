import React from 'react';
import Delivery from "../img/delivery.png"
import HeroBg from "../img/heroBg.png"
import { heropData } from '../utils/data';





const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
            <div className='py-4 flex-1 flex flex-col items-start justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                    <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
                        <img className='w-full h-full object-contain' src={Delivery} alt="Delivery" />
                    </div>
                </div>

                <p className='text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[4.5rem]'> Your City</span></p>
                <p className='text-base text-neutral-800 text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, accusamus eveniet? Consequatur, cumque eveniet laudantium quae atque illum dolorum corporis exercitationem inventore dolore commodi dolores aperiam voluptate qui repellat harum.</p>

                <button type='button' className='bg-gradient-to-br from-orange-300 to-orange-700 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all  ease-in-out duration-100'>Order Now</button>

            </div>
            <div className='py-2 flex-1 flex items-center relative'>
                <img
                    className='ml-auto h-[420px] w-full lg:w-auto lg:h-[650px]'
                    src={HeroBg} alt="" />
                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-16 py-3 gap-6 flex-wrap'>
                    {
                        heropData && heropData.map(n => (
                            <div key={n.id} className='lg:w-[190px] p-4 bg-violet-100 back-blur-md rounded-3xl flex flex-col items-center justify-center'>
                                <img className='lg:w-40 w-20 -mt-10 lg:-mt-20' src={n.imageSrc} alt="I1" />
                                <p className='lg:text-lg text-base font-semibold text-neutral-800 mt-2 lg:mt-4'>{n.name}</p>
                                <p className='text-[12px] lg:text-md font-semibold text-violet-500 my-1 lg:my-3'>{n.decp}</p>
                                <p className='text-sm font-semibold text-neutral-800'>{n.price}<span className='text-2xl font-bold text-red-600 '> ৳</span></p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeContainer;