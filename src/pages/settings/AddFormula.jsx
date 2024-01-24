import React from 'react'
import FormulaForm from '../../forms/FormulaForm'
import Heading from '../../components/Heading'

const AddFormula = () => {
    return (
        <div>
            <Heading title={"Ajouter une formule"} />
            <div className="my-4 p-4 bg-white shadow-lg">
                <FormulaForm />
            </div>
        </div>
    )
}

export default AddFormula