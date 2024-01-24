import React from 'react'
import Heading from '../../components/Heading'
import { useParams } from 'react-router-dom'
import { useGetFormulesForFormulaQuery, useGetSingleFormulaQuery } from '../../api/FormulaApi'
import HandleLoading from '../../utils/HandleLoading'
import HandleGetErrors from '../../utils/HandleGetErrors'
import SingleFormuleCalc from '../../components/dashboard/SingleFormuleCalc'
import { Link } from 'react-router-dom'

const ConfigFormula = () => {
    const { id } = useParams()
    const { data, isLoading, isError, isSuccess, error } = useGetSingleFormulaQuery(id)
    const { data: formules, isLoading: isFormulaLoading, isError: isFormulaError, isSuccess: isFormulaSuccess, error: formulaError } = useGetFormulesForFormulaQuery(id)
    return (
        <div>

            <Heading title={'Configuration de la formule'} />

            {isLoading && <HandleLoading />}
            {isError && <HandleGetErrors error={error} />}
            {
                isSuccess &&
                <div className='my-4 bg-white p-6 shadow-lg rounded-md' >
                    <p className='font-semibold text-xl '>
                        {data.title}
                    </p>
                    <span className='text-gray-400' > {data.ref} </span>
                </div>
            }
            {
                isFormulaSuccess &&
                <div>
                    <div className='flex justify-between items-center' >
                        <h2 className='text-xl ' >Liste des critères de répartition</h2>
                        <Link
                            to={'add'}
                            className=' bg-gradient-to-tr from-sky-500 to-indigo-500 px-7 py-3 rounded-lg text-white' >
                            + Ajouter
                        </Link>
                    </div>
                    < div className="flex flex-col z-50 p-4 items-end">

                    </div>
                    <div className=' my-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4' >
                        {
                            formules.map((formule, index) => (<SingleFormuleCalc formule={formule} key={index} />))
                        }
                    </div>

                </div>
            }

        </div>
    )
}

export default ConfigFormula