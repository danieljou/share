import { motion } from 'framer-motion'
import { useState } from 'react'
import { IMAGES } from '../utils/images'

const Header2 = () => {
    const [state, setState] = useState(false)

    // Replace   path with your path
    const navigation = [
        { title: "Customers", path: " " },
        { title: "Careers", path: " " },
        { title: "Guides", path: " " },
        { title: "Partners", path: " " },
        { title: "Team", path: " " }
    ]

    return (
        <motion.div
            initial={{
                x: -700,
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1
            }}
            transition={{ duration: 0.7 }}
            className='bg-gradient-to-tr 
            from-sky-500 to-indigo-500 p-7'
        >

            <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8 lg:gap-7">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left ">
                    <h1 className="text-white font-bold text-4xl  xl:text-5xl sm:leading-9">
                        Optimisez la gestion de vos fonds avec
                        <span className="text-black"> ShareTax</span>
                    </h1>
                    <p className="text-white/70 max-w-xl leading-9 sm:mx-auto lg:ml-0">

                        Maximisez l'efficacité de votre gestion financière grâce à notre application innovante de Répartition des Taxes.
                    </p>

                </div>
                <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
                    <img src={IMAGES.cartt} className="w-full mx-auto sm:w-10/12  lg:w-[70%]" />
                </div>
            </section>
        </motion.div>
    )
}

export default Header2