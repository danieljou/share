import React from 'react'
import FormuleForm from '../../forms/FormuleForm'
import { useParams } from 'react-router-dom'
import Heading from '../../components/Heading'
import HandleLoading from '../../utils/HandleLoading'
import { useGetSingleFormulaQuery } from '../../api/FormulaApi'
import HandleGetErrors from '../../utils/HandleGetErrors'

const AddFormule = () => {
    const { id } = useParams()
    const { data, isLoading, isError, isSuccess, error } = useGetSingleFormulaQuery(id)
    return (
        <div>
            <Heading title={'Ajouter un critère de répartition'} />
            {
                isLoading && <HandleLoading />
            }
            {
                isError && <HandleGetErrors error={error} />
            }
            {
                isSuccess &&
                <div className="my-4 p-12 bg-white shadow-lg">
                    <FormuleForm id={id} />
                </div>
            }

        </div>
    )
}

export default AddFormule