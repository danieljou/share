export const addErrorClasses = (formMik, field) => {
    if (formMik.touched[field] && formMik.errors[field])
        return 'border-red-400 focus:border-red-400'
}
export const addErrorMessage = (formMik, field) => {
    if (formMik.touched[field] && formMik.errors[field])
        return (
            <div className='text-red-500 text-xs' >
                {formMik.errors[field]}
            </div>
        )
}

export const formStyles = ()=>{
    return 'w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
}