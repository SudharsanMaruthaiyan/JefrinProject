import React, { useContext, useEffect, useState } from 'react'
import { workers } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Workers = () => {
  const navigate = useNavigate()
  const {workerData, setWorkerData} = useContext(AppContext)

  console.log(workerData);
  

  return (
    <div className=' sm:px-[10%] px-6 mx-auto pb-20 pt-28'>
      <h1 className=' text-center font-bold text-2xl font-[poppins]'>Our Workers</h1>
      <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6'>
          {
              workerData.map((item,index)=>(
                <div onClick={()=> {navigate(`/appointment/${item._id}`);scrollTo(0,0)}} className=' border border-blue-200 overflow-hidden rounded-xl cursor-pointer my-5 hover:translate-y-[-10px] duration-500 transition-all'>
                    <img className=' bg-blue-50' src={item.image} alt="" />
                    <div className=' p-4'>
                        <div className={`flex items-center gap-2 text-center ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
                            <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-gray-500'}`}></p>
                            <p className=''>{item.available ? "Available" : "Not Available"}</p>
                        </div>
                        <p className=' text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className=' text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            )) 
          }
        </div>
    </div>
  )
}

export default Workers