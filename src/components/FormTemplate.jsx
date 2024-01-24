/** @format */

import React from "react";
import {
	addErrorClasses,
	addErrorMessage,
	formStyles,
} from "../utils/addErrorClasses";

const FormTemplate = ({ label, type, placeholder, name, formik }) => {
	return (
		<div>
			<div className="w-full flex flex-col my-3">
				<label className="text-gray-400" htmlFor="taux">
					{label}
				</label>
				<input
					placeholder={placeholder}
					type={type}
					name={name}
					{...formik.getFieldProps(name)}
					className={`${formStyles} ${addErrorClasses(formik, name)} `}
				/>
				{addErrorMessage(formik, name)}
			</div>
		</div>
	);
};

export default FormTemplate;
