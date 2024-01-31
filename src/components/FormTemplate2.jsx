/** @format */

import React from "react";
import {
	formStyles,
} from "../utils/addErrorClasses";

const FormTemplate2 = ({ label, type, placeholder }) => {
	return (
		<div>
			<div className="w-full flex flex-col my-3">
				<label className="text-gray-400" htmlFor="taux">
					{label}
				</label>
				<input
					placeholder={placeholder}
					type={type}				
					className={`${formStyles} `}
				/>
				
			</div>
		</div>
	);
};

export default FormTemplate2;
