import React from 'react'
import { FaCheckDouble } from "react-icons/fa6";
export const Services = ({ service }) => {
  return (
    <div className='bg-white h-full p-4 shadow-md rounded-lg flex flex-col justify-between' >
      <service.logo

        className=" text-5xl p-2 bg-gradient-to-tr 
              from-sky-500 to-indigo-500 rounded-full text-white"
      />
      <p className='font-semibold my-2' > {service.title} </p>
      {
        service.items.map((el, key) => (
          <div className='flex gap-3 my-2 items-center' key={key} >
              <FaCheckDouble size={15} className='text-indigo-300' />
              <p> {el} </p>
          </div>
        ))
      }
    </div>
  )
}
