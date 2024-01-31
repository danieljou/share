import React from 'react'
import Heading from './Heading'
import FormTemplate2 from './FormTemplate2'


const FilterTax = () => {
  return (
    <div>
      <div className="shadow-lg w-full mx-auto bg-white py-3">
        <div className="w-full ml-5">
             <p className="text-xl ">Filtrage des operations</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mx-5">
           <FormTemplate2 label={"Date:"} placeholder={"Date..."}/>
           <FormTemplate2 label={"Montant:"} placeholder={"Montant..."}/>
           <FormTemplate2 label={"Taux:"} placeholder={"Taux..."}/>
        </div>

      </div>
    </div>
  )
}

export default FilterTax
