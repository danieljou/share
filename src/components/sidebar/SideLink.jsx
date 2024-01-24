import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SideLink = ({ link , toggle}) => {

    return (
        <NavLink
            to={link.link}
            className={(active) => {
                // dark:bg-gray-800 bg-gray-100 rounded-tr-full rounded-br-full
                return `
                "   
                flex flex-row items-center px-6 py-2 text-white transition-colors duration-300 transform rounded-lg dark:text-dark 
                "
                ${active.isActive && ' group is-active bg-white text-black rounded-tr-full rounded-br-full'} 
                `
            }}>
            <link.img className={` 
                p-1
                text-4xl
                group-[.is-active]:bg-gradient-to-tr 
                group-[.is-active]:from-sky-500 
                group-[.is-active]:to-indigo-500 
                group-[.is-active]:text-white
                group-[.is-active]:rounded-lg
                
            `} />
            {
                toggle &&  <span className="group-[.is-active]:text-black mx-2 text-sm font-medium">{link.label}</span>

            }
        </NavLink>
    )
}

export default SideLink