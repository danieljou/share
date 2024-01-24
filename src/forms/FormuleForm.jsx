import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
import { addErrorClasses, addErrorMessage, formStyles } from '../utils/addErrorClasses'
import { useAddFormuleMutation, useGetSingleFormulaQuery } from '../api/FormulaApi'
import FormLoader from '../components/FormLoader'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { MEMBER_TYPES } from '../utils/types';
const FormuleForm = ({ id }) => {
    const [isLoading, setIsLoading] = useState(false)
    const { refetch } = useGetSingleFormulaQuery(id)
    const [addFromule] = useAddFormuleMutation()
    const navigate = useNavigate()
    const handleSubmit = async (values) => {
        setIsLoading(true)
        console.log('Hello');
        const res = await addFromule({ data: values, id: id })
        if (res) {
            setIsLoading(false)
            if (res.data) {
                toast.success('Critère de repartiton crée avec succès')
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
            member_type: '',
            taux: 0,
            chapter: '',
            article: '',
            zone: '',
            benfeniciare: ''
        },
        validationSchema: Yup.object({
            member_type: Yup.string().required('Le type de membre est requis').oneOf(MEMBER_TYPES, "Le type doit faire réfférence à la liste disponible"),
            taux: Yup.number().required("Le taux est requis").positive("Le taux doit être positif"),
            chapter: Yup.string().required('Le chapitre est requis'),
            article: Yup.string().required('L\'article est requis'),
            zone: Yup.string().required('La zone est requise'),

        }),
        onSubmit: (values) =>  handleSubmit(values)

    })
    return (
        <div className='w-full'>
            <form noValidate onSubmit={formik.handleSubmit} >
                <div className='w-full flex flex-col  my-3' >
                    <label className='text-gray-400' htmlFor='title' >
                        Selectionnez le type de membre
                    </label>
                    <select
                        placeholder='Ex : Commune'
                        // type='text'
                        name='member_type'
                        {...formik.getFieldProps('member_type')}
                        className={`${formStyles} ${addErrorClasses(formik, 'member_type')} `}
                    >
                        <option> -----</option>
                        {
                            MEMBER_TYPES.map((type, index) => (
                                <option key={index} value={type} > {type} </option>
                            ))
                        }

                    </select>

                    {addErrorMessage(formik, 'member_type')}
                </div>
                <div className='w-full flex flex-col my-3' >
                    <label className='text-gray-400' htmlFor='taux' >
                        Entrez le taux
                    </label>
                    <input
                        placeholder='Ex : 36.8'
                        type='number'
                        name='taux'
                        {...formik.getFieldProps('taux')}
                        className={`${formStyles} ${addErrorClasses(formik, 'taux')} `}
                    />
                    {addErrorMessage(formik, 'taux')}
                </div>

                <div className='w-full flex flex-col my-3' >
                    <label className='text-gray-400' htmlFor='chapter' >
                        Entrez le chapitre
                    </label>
                    <input
                        placeholder='Ex : 3'
                        type='text'
                        name='chapter'
                        {...formik.getFieldProps('chapter')}
                        className={`${formStyles} ${addErrorClasses(formik, 'chapter')} `}
                    />
                    {addErrorMessage(formik, 'chapter')}
                </div>

                <div className='w-full flex flex-col my-3' >
                    <label className='text-gray-400' htmlFor='article' >
                        Entrez l'article
                    </label>
                    <input
                        placeholder='Ex : 3(2)'
                        type='text'
                        name='article'
                        {...formik.getFieldProps('article')}
                        className={`${formStyles} ${addErrorClasses(formik, 'article')} `}
                    />
                    {addErrorMessage(formik, 'article')}
                </div>

                <div className='w-full flex flex-col my-3' >
                    <label className='text-gray-400' htmlFor='zone' >
                        Entrez la zone
                    </label>
                    <input
                        placeholder='Ex : Region'
                        type='text'
                        name='zone'
                        {...formik.getFieldProps('zone')}
                        className={`${formStyles} ${addErrorClasses(formik, 'zone')} `}
                    />
                    {addErrorMessage(formik, 'zone')}
                </div>

                <div className='w-full flex flex-col my-3' >
                    <label className='text-gray-400' htmlFor='benfeniciare' >
                        Entrez le bénféniciaire
                    </label>
                    <input
                        placeholder='Ex : Douala'
                        type='text'
                        name='benfeniciare'
                        {...formik.getFieldProps('benfeniciare')}
                        className={`${formStyles} ${addErrorClasses(formik, 'benfeniciare')} `}
                    />
                    {addErrorMessage(formik, 'benfeniciare')}
                </div>


                <div className="flex justify-end p-4">
                    <button type='submit' className='rounded-lg px-7 py-3 text-white bg-gradient-to-tr from-sky-500 to-indigo-500' >
                        {
                            isLoading ? <FormLoader /> : 'Enregistrer'
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormuleForm