import React from 'react'
import { CgSpinner } from 'react-icons/cg'

const HandleLoading = ({ isLoading }) => {
    return (
        <div>
            <div className='w-full h-40 bg-white my-4 flex justify-center items-center shadow-lg rounded-lg' >
                <CgSpinner className='text-7xl animate-spin' /> <span>Chargement...</span>
            </div>
        </div>
    )
}

export default HandleLoading