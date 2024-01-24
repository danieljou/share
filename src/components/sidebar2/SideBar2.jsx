import React, { useState } from 'react'
import SIdeGroup from './SIdeGroup2'

const SideBar2 = ({ menu }) => {
    const [toggle, setToggle] = useState(true)
    return (
        <div>
            <aside className={
            `
            ${!toggle && 'w-[70px]'}
            flex flex-col w-64 h-screen pr-5 py-8 overflow-y-auto
           bg-gradient-to-bl 
           from-sky-500 
           to-indigo-500 
            border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700
              `
            }>
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className="-mx-3 space-y-6 ">
                        {
                            menu.map((men, key) => (
                                <div key={key} >
                                    <SIdeGroup toggle={toggle} title={men.title} links={men.links} />
                                </div>
                            ))
                        }
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default SideBar2