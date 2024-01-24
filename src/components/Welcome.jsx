import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
const Welcome = () => {
    return (
        <div
            className='bg-gradient-to-tr 
            from-sky-500 to-indigo-500 p-4 p-x-7 h-screen
            flex justify-between items-center
            gap-4
            '
        >
            <h2 className='text-7xl w-full text-white px-9 font-medium ' >
                Optimisez la gestion de vos fonds avec notre Application de Répartition des Taxes.
            </h2>
            <div className="w-full flex justify-center">
                <div className='-rotate-12'>
                    <FaMoneyBillTransfer className='text-white' size={400} />
                </div>
            </div>
        </div>
    )
}

export default Welcome