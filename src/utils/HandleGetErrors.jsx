import React from 'react'

const HandleGetErrors = ({error}) => {
  console.log(error);
  return (
    <div className='w-full h-40 bg-white my-4 flex justify-center items-center shadow-lg rounded-lg' >
        {
          error.status === 404 && '404 pas trouvé'
        }
    </div>
  )
}

export default HandleGetErrors