import React from 'react'
import SideLink2 from './SideLink2'

const SIdeGroup2 = ({ title, links, toggle }) => {

    return (
        <div>


            <div className="space-y-3 px-4 text-white my-4">
                <label className="px-3 text-xs text-white uppercase dark:text-gray-400">{title}</label>
            </div>

            {
                links.map((link, key) => (
                    <div className='my-2' key={key} >
                        <SideLink2  link={link} />
                    </div>
                ))
            }
        </div>
    )
}

export default SIdeGroup2