import React from 'react'
import SideLink from './SideLink'

const SIdeGroup = ({ title, links, toggle }) => {

    return (
        <div>
            {
                toggle &&

                <div className="space-y-3 px-4 text-white mb-4">
                    <label className="px-3 text-xs text-white uppercase dark:text-gray-400">{title}</label>
                </div>
            }

            {
                links.map((link, key) => (
                    <div className='' key={key} >
                        <SideLink toggle={toggle} link={link} />
                    </div>
                ))
            }
        </div>
    )
}

export default SIdeGroup