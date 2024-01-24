import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SideLink2 = ({ link, toggle }) => {
    console.log(link);
    return (
        <li className="my-px">
            <NavLink
            to={link.link}
                // flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100
                // flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700
                className={(active)=>{
                    return ` ${active.isActive ? 'group is-active  flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100' : 'group flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700'} `
                }}
            >
                <span className="flex items-center justify-center text-lg group-hover:text-gray-700 text-gray-300 group-[.is-active]:text-gray-700 ">
                    <link.img />
                </span>
                <span className="ml-3"> {link.label} </span>
                {/* <span
                    className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
                >1k</span> */}
            </NavLink>
        </li>


    )
}

export default SideLink2