import React from 'react'
import Heading from '../../components/Heading'
import SingleFormule from '../../components/dashboard/SingleFormule'
import { CgSpinner } from "react-icons/cg";
import { useGetFormulasQuery } from '../../api/FormulaApi';
import HandleLoading from '../../utils/HandleLoading';
import { Link } from 'react-router-dom';
const Formules = () => {
    const first = [1, 2, 3, 4]
    const { data, isLoading, isSuccess, isError } = useGetFormulasQuery()
    return (
        <div>
            <Heading title={'Formules'} />
            < div className="flex flex-col z-50 p-4 items-end">
                <Link
                    to={'add'}
                    className=' bg-gradient-to-tr from-sky-500 to-indigo-500 px-7 py-3 rounded-lg text-white' >
                    Ajouter
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2 xl:grid-cols-3">
                {
                    isLoading &&
                    <div className='md:col-span-3' > <HandleLoading /> </div>

                }
                {
                    isSuccess &&
                    data.map((el, index) => (
                        <SingleFormule data={el} key={index} />
                    ))
                }
            </div>

        </div>
    )
}

export default Formules