/** @format */

import React, { useState } from "react";
import {
	addErrorClasses,
	addErrorMessage,
	formStyles,
} from "../utils/addErrorClasses";
import {
	ARRONDISSEMENT_PAR_DEPARTEMENT,
	COMMUNAUTES_URBAINES,
	DEPARTEMENTS_PAR_REGIONS,
	REGIONS,
	USERS_ACCOUNT_TYPES,
} from "../utils/types";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
	useCreateInititutionAccountMutation,
	useGetDashboardDataForUserQuery,
} from "../api/DashBoardApi";
import FormLoader from "../components/FormLoader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AccountMemberForm = () => {
	const { refetch } = useGetDashboardDataForUserQuery();
	const navigate = useNavigate();
	const Schema = Yup.object().shape({
		custum_name: Yup.string(),
		type: Yup.string()
			.required("Le type d'institution est requis ")
			.oneOf(USERS_ACCOUNT_TYPES, "Selectionnez un type valide"),
		region_value: Yup.string().when("type", (type, Schema) => {
			if (type === "Commune" || type === "Commune d' arrondissement") {
				return Schema.string().required();
			}
			return Schema;
		}),
		value: Yup.string().required("Cette valeur est requise"),
	});
	const [isLoading, setIsLoading] = useState(false);
	const [createAccount] = useCreateInititutionAccountMutation();
	const handleSubmit = async (values) => {
		setIsLoading(true);
		const res = await createAccount(values);
		if (res) {
			setIsLoading(false);
			if (res.error) {
				// console.log(res.error);
				const error = res.error;
				if (error.status === 400) {
					console.log(error);
					toast.error("Une erreur est survenu \n Vérifiez tous les champs");
				}
			} else if (res.data) {
				refetch();
				toast.success(
					"Votre demande de création de compte à été effectué avec succès"
				);
				navigate("/user/dashboard");
			}
		}
	};
	const formik = useFormik({
		initialValues: {
			custum_name: "",
			type: "",
			region_value: "",
			value_departement: "",
			value: "",
		},
		validationSchema: Schema,

		onSubmit: (values) => handleSubmit(values),
	});
	// console.log(DEPARTEMENTS_PAR_REGIONS[formik.values.region]);
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className="w-full flex flex-col my-3">
					<label className="text-gray-400" htmlFor="ref">
						Nom personnalisé
					</label>
					<input
						placeholder="Entre le nom personnalisé"
						type="text"
						name="custum_name"
						{...formik.getFieldProps("custum_name")}
						className={`${formStyles}  ${addErrorClasses(
							formik,
							"custum_name"
						)} `}
					/>

					{addErrorMessage(formik, "custum_name")}
				</div>
				<div className="w-full flex flex-col my-3">
					<label className="text-gray-400" htmlFor="ref">
						Selectionnez le type
					</label>
					<select
						placeholder="Seletionnez le type "
						type="text"
						name="type"
						{...formik.getFieldProps("type")}
						className={`${formStyles}  ${addErrorClasses(formik, "type")} `}>
						<option> ------- </option>
						{USERS_ACCOUNT_TYPES.map((type, index) => (
							<option value={type} key={index}>
								{" "}
								{type}{" "}
							</option>
						))}
					</select>
					{addErrorMessage(formik, "type")}
				</div>

				{formik.values.type === "Communauté urbaine" && (
					<div className="w-full flex flex-col my-3">
						<label className="text-gray-400" htmlFor="ref">
							Selectionnez la communauté urbaine
						</label>
						<select
							placeholder="Seletionnez le type "
							type="text"
							name="value"
							{...formik.getFieldProps("value")}
							className={` w-full ${formStyles}  ${addErrorClasses(
								formik,
								"value"
							)} `}>
							<option> ------- </option>
							{COMMUNAUTES_URBAINES.map((type, index) => (
								<option value={type} key={index}>
									{" "}
									{type}{" "}
								</option>
							))}
						</select>
						{addErrorMessage(formik, "value")}
					</div>
				)}
				{(formik.values.type === "Commune" ||
					formik.values.type === "Commune d' arrondissement") && (
					<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
						<div className="w-full flex flex-col my-3">
							<label className="text-gray-400" htmlFor="ref">
								Selectionnez la region
							</label>
							<select
								placeholder="Seletionnez le type "
								type="text"
								name="region_value"
								{...formik.getFieldProps("region_value")}
								className={` w-full ${formStyles}  ${addErrorClasses(
									formik,
									"region_value"
								)} `}>
								<option> ------- </option>
								{REGIONS.map((type, index) => (
									<option value={type} key={index}>
										{" "}
										{type}{" "}
									</option>
								))}
							</select>
							{addErrorMessage(formik, "region")}
						</div>

						<div className="w-full flex flex-col my-3">
							<label className="text-gray-400" htmlFor="ref">
								Selectionnez le département
							</label>
							<select
								placeholder="Seletionnez le type "
								type="text"
								name="value_departement"
								{...formik.getFieldProps("value_departement")}
								className={` w-full ${formStyles}  ${addErrorClasses(
									formik,
									"value_departement"
								)} `}>
								<option> ------- </option>
								{formik.touched.region_value && !formik.errors.region_value && (
									<>
										{DEPARTEMENTS_PAR_REGIONS[formik.values.region_value]?.map(
											(type, index) => (
												<option value={type} key={index}>
													{" "}
													{type}{" "}
												</option>
											)
										)}
									</>
								)}
							</select>
							{addErrorMessage(formik, "value_departement")}
						</div>

						<div className="w-full flex flex-col my-3">
							<label className="text-gray-400" htmlFor="ref">
								Selectionnez la cummune
							</label>
							<select
								placeholder="Seletionnez le type "
								type="text"
								name="value"
								{...formik.getFieldProps("value")}
								className={`${formStyles}  ${addErrorClasses(
									formik,
									"value"
								)} `}>
								<option> ------- </option>
								{ARRONDISSEMENT_PAR_DEPARTEMENT[
									formik.values.value_departement
								]?.map((type, index) => (
									<option value={type} key={index}>
										{" "}
										{type}{" "}
									</option>
								))}
							</select>
							{addErrorMessage(formik, "value")}
						</div>
					</div>
				)}
				<div className="flex justify-end my-6">
					<button
						disabled={isLoading}
						type="submit"
						className="px-7 py-3 bg-indigo-500 text-white rounded-lg">
						{isLoading ? <FormLoader /> : "Enregistrer"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default AccountMemberForm;
