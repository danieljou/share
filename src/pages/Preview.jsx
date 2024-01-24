import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import { MENU1 } from '../utils/menu'
import toast from 'react-hot-toast'
import Side2 from '../components/Side2'

const Preview = () => {
  // toast.success('Hello world')
  return (
    <div>
        {/* <SideBar menu={MENU1} /> */}
        <Side2/>
    </div>
  )
}

export default Preview