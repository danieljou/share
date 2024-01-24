/** @format */
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import FormTemplate from "../components/FormTemplate";
import * as Yup from "yup";
import FormLoader from "../components/FormLoader";
import { useGetFormulasQuery } from "../api/FormulaApi";
import HandleLoading from "../utils/HandleLoading";
import HandleGetErrors from "../utils/HandleGetErrors";
import {
	addErrorClasses,
	addErrorMessage,
	formStyles,
} from "../utils/addErrorClasses";
import { useCreateTaxMutation } from "../api/TaxManagementApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const TaxForm = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [formulas, setFormulas] = useState([]);
	const [id, setID] = useState([]);
	const [createTax] = useCreateTaxMutation();
	const {
		data,
		isLoading: formulasLoading,
		isSuccess,
		isError,
		error,
	} = useGetFormulasQuery();
	useEffect(() => {
		if (isSuccess) {
			let localsId = [];
			let localsFormulas = [];
			data.forEach((element) => {
				localsId.push(element.id);
				localsFormulas.push(element.title);
			});
			setFormulas(localsFormulas);
			setID(localsId);
		}
	}, [data, isSuccess]);

	const handleSubmit = async (values) => {
		setIsLoading(true);
		const res = await createTax({ data: values });
		if (res) {
			setIsLoading(false);
			if (res.data) {
				toast.success("Taxe créée avec succès");
				navigate("/manage/taxes");
			} else if (res.error) {
				toast.error("une érreur est servenu");
			}
		}
	};
	const formik = useFormik({
		initialValues: {
			formula: "",
			title: "",
			start_date: "",
			end_date: "",
			zone: "",
			amount: "",
		},
		validationSchema: Yup.object({
			formula: Yup.string()
				.required("La formule est requise")
				.oneOf(id, "Selectionez une formule valide"),
			title: Yup.string().required("Le titre est requis"),
			zone: Yup.string().required("La zone est requise"),
			amount: Yup.number()
				.required("Le montant est requis")
				.min(1000, "Le montant minumun rest requis"),
			start_date: Yup.date().required("Le date de début est requise"),
			end_date: Yup.date()
				.required("Le date de fin est requise")
				.min(
					Yup.ref("start_date"),
					"La date de fin ne peut être inférieur à celle de début"
				),
		}),
		onSubmit: (values) => handleSubmit(values),
	});
	return (
		<div>
			{formulasLoading && <HandleLoading />}
			{isError && <HandleGetErrors error={error} />}
			{isSuccess && (
				<form onSubmit={formik.handleSubmit}>
					<div className="w-full flex flex-col my-3">
						<label className="text-gray-400" htmlFor="ref">
							Selectionnez la formule
						</label>
						<select
							placeholder="Seletionnez le type "
							type="text"
							name="formula"
							{...formik.getFieldProps("formula")}
							className={`${formStyles}  ${addErrorClasses(
								formik,
								"formula"
							)} `}>
							<option> ------- </option>
							{formulas.map((type, index) => (
								<option value={id[index]} key={index}>
									{type}
								</option>
							))}
						</select>
						{addErrorMessage(formik, "formula")}
					</div>
					<FormTemplate
						formik={formik}
						label={"Entrez le titre"}
						name={"title"}
						placeholder={"Ex: Taxe de redevance forestière"}
						type={"text"}
					/>
					<p className="text-gray-400 mt-3">Selectionnez la période</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
						<FormTemplate
							formik={formik}
							label={"Entrez la date de début"}
							name={"start_date"}
							placeholder={"Ex: "}
							type={"date"}
						/>
						<FormTemplate
							formik={formik}
							label={"Entrez la date de fin"}
							name={"end_date"}
							placeholder={"Ex: "}
							type={"date"}
						/>
					</div>
					<FormTemplate
						formik={formik}
						label={"Entrez la zone"}
						name={"zone"}
						placeholder={"Ex: National"}
						type={"text"}
					/>
					<FormTemplate
						formik={formik}
						label={"Entrez le montant"}
						name={"amount"}
						placeholder={"Ex: 700 000 000"}
						type={"number"}
					/>
					<div className="flex bg-white p-4 my-4 justify-end">
						<button
							type="submit"
							className="px-8 py-3 rounded-md bg-indigo-600 text-white">
							{isLoading ? <FormLoader /> : "Créer"}
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default TaxForm;
