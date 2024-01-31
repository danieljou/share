
import React from 'react'

const TaskDetails = () => {
  return (
    <div>
        <div className="bg-white-500 container mx-auto w-90 border-slate-5 py-5 shadow-lg">
            <div className=" w-full bg-indigo-500">
                <p className="font-sm text-center p-5 text-white text-2xl">Titre de la taxe</p>
            </div>

                <div className="flex-col text-left pb-5 px-5 py-5">
                    <p className="font-bold ">Informations:</p>
                </div>
            <div className=" grid grid-col-2 grid-flow-col gap-4 px-5 leading-loose">
                <div className="">
                    <p>Date de début:  {<span>29/01/2024</span>}</p>
                    <p>Date de Fin:  {<span>29/01/2024</span>}</p>
                    <p>Date: </p>
                </div>
                <div className="pt-2">
                    <p>Amount: {<span>10 000 000 FCFA</span>} </p> 
                    <p>Taux: {<span>17.5%</span>} </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TaskDetails

