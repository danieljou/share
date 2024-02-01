/** @format */

import React from "react";
import { FLex } from "./dashboard/SingleFormuleCalc";

const OperationDetails = ({ data }) => {
	return (
		<div>
			<div className="bg-white-500 container mx-auto w-90 border-slate-5 pb	-5 shadow-lg">
				<div className=" w-full bg-white">
					<p className="font-bold text-center pb-2 text-blue-500 text-2xl">
						{/* {data} */}
						{data.tax.formula.title}
					</p>
				</div>
				<div className="p-2">
					<p className="font-semibold text-xl"> {data.tax.title} </p>
					<FLex title={"ID de l'opératrion"} data={data.id} />
				</div>
				<div className=" gap-4 px-5 leading-loose">
					<div className="">
						<p className="font-bold text-xl my-4">Details sur le versement</p>
						<hr />
						<FLex
							title={"Montant de la taxe"}
							data={`${data.tax.amount.toLocaleString()} FCFA`}
						/>
						<FLex title={"Pourcentage"} data={`${data.percent} %`} />
						<FLex
							title={"Montant perçu"}
							data={`${data.amount.toLocaleString()} FCFA`}
						/>
						<FLex title={"Date du versement"} data={data.date.slice(0, 10)} />
						<FLex title={"Heure du versement"} data={data.date.slice(12, 22)} />
					</div>
					<div className="mt-4">
						<p className="font-bold text-xl my-2">Période de la taxe</p>
						<hr />
						<FLex title={"Date de début:"} data={data.tax.start_date} />
						<FLex title={"Date de fin:"} data={data.tax.end_date} />
						<hr />
					</div>
				</div>
			</div>
		</div>
	);
};

export default OperationDetails;
