import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { addErrorClasses, addErrorMessage, formStyles } from '../utils/addErrorClasses'
import { useAddFormulaMutation, useGetFormulasQuery } from '../api/FormulaApi'
import FormLoader from '../components/FormLoader'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const FormulaForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { refetch } = useGetFormulasQuery()
    const [addFromula] = useAddFormulaMutation()
    const navigate = useNavigate()
    const handleSubmit = async (values) => {
        setIsLoading(true)
        const res = await addFromula(values)
        if (res) {
            setIsLoading(false)
            if (res.data) {
                toast.success('Formule créee avec succès')
                refetch()
                navigate(-1)
            }
            else if (res.error) {
                if (res.error.status === 400) {
                    toast.error('Vérifiez tous les champs')
                } else {
                    toast.error('Une érreur est survenu')
                }
            }
        }
    }
    const formik = useFormik({
        initialValues: {
            title: '',
            ref: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Le titre est requis'),
            ref: Yup.string().required('La réfférence  est requise'),
        }),
        onSubmit: (values) => handleSubmit(values)

    })
    return (
        <div className='w-full'>
            <form noValidate onSubmit={formik.handleSubmit} >
                <div className='w-full flex flex-col  my-3' >
                    <label className='text-gray-400' htmlFor='title' >
                        Entrez le titre
                    </label>
                    <input
                        placeholder='Ex : Taxe de la décentralisation'
                        type='text'
                        name='title'
                        {...formik.getFieldProps('title')}
                        className={`${formStyles} ${addErrorClasses(formik, 'title')} `}
                    />
                    {addErrorMessage(formik, 'title')}
                </div>
                <div className='w-full flex flex-col my-3' >
                    <label className='text-gray-400' htmlFor='ref' >
                        Entrez la réfference
                    </label>
                    <input
                        placeholder='Ex : 11/125 du 14 mars 2070'
                        type='text'
                        name='ref'
                        {...formik.getFieldProps('ref')}
                        className={`${formStyles} ${addErrorClasses(formik, 'ref')} `}
                    />
                    {addErrorMessage(formik, 'ref')}
                </div>
                <div className="flex justify-end p-4">
                    <button type='submit' 
                    
                    className='rounded-lg px-7 py-3 text-white bg-gradient-to-tr from-sky-500 to-indigo-500' >
                        {
                            isLoading ? <FormLoader /> : 'Enregistrer'
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormulaForm