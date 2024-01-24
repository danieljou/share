/** @format */

import { motion } from "framer-motion";
import React, { useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { addErrorClasses, addErrorMessage } from "../utils/addErrorClasses";
import FormLoader from "../components/FormLoader";
import { useRegisterMutation } from "../api/AuthenticationApi";
import toast from "react-hot-toast";
const Register = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [registerUser] = useRegisterMutation();
	const [custumErrors, setCustumErrors] = useState({});
	const navigate = useNavigate();
	const HandleSubmit = async (values) => {
		setIsLoading(true);
		console.log(values);
		const res = await registerUser({ data: values });
		setCustumErrors({});
		if (res) {
			setIsLoading(false);
			if (res.error) {
				// console.log(res.error);
				const errors = res.error;
				console.log();
				if (errors.data.username) {
					toast.error("Un utilisateur possède déja ce nom d'utilisateur");
					setCustumErrors({
						...custumErrors,
						username: "Un utilisateur possède déja ce nom d'utilisateur",
					});
				}
				if (errors.data.email) {
					toast.error("Un utilisateur possède déja cet email");
					setCustumErrors({
						...custumErrors,
						email: "Un utilisateur possède déja  cet email",
					});
				}
			} else if (res.data) {
				toast.success("Création de compte effectué avec succès");
				navigate("/login");
			}
		}
	};
	const styles =
		"w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg";
	const regex = `(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"`;
	const requiredField = () => Yup.string().required("required");
	const passwordField = () =>
		requiredField()
			.min(
				8,
				"password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
			)
			.minLowercase(1, "password must contain at least 1 lower case letter")
			.minUppercase(1, "password must contain at least 1 upper case letter")
			.minNumbers(1, "password must contain at least 1 number")
			.minSymbols(1, "password must contain at least 1 special character");
	const formMik = useFormik({
		initialValues: {
			last_name: "",
			username: "",
			email: "",
			password: "",
			password2: "",
		},
		validationSchema: Yup.object({
			last_name: Yup.string().required("Le nom est requis"),
			username: Yup.string().required("Le nom d'utilisateur es requis"),
			email: Yup.string()
				.required("L'email est requise")
				.email("Ceci n'est pas une email valide"),
			password: Yup.string().required("Entrez le mot de passe"),
			password2: Yup.string()
				.required("Entrez la confirmation")
				.required("Confirmez le mot de passe"),
		}),
		onSubmit: (values) => HandleSubmit(values),
	});
	return (
		<div className="relative">
			<main className="w-full flex">
				<div className="relative flex-1 hidden items-center justify-center h-screen bg-indigo-600 lg:flex">
					<Link
						to="/"
						className="absolute z-10 -right-5 top-[50%] bg-gradient-to-tr 
            from-sky-500 to-indigo-500 p-2 rounded-full shadow-lg">
						<IoChevronBackOutline className="text-white font-bold" size={30} />
					</Link>
					<div className="relative z-10 w-full max-w-md">
						{/* <img src="https://floatui.com/logo-dark.svg" width={150} /> */}
						<GiReceiveMoney size={70} className="text-white" />
						<div className=" mt-16 space-y-3">
							<h3 className="text-white text-3xl font-bold">
								Commencez dès maintenant
							</h3>
							<p className="text-gray-300">
								Crée votre compte ou celui de votre institution afin de
								continuer
							</p>
							<div className="flex items-center -space-x-2 overflow-hidden">
								<img
									src="https://randomuser.me/api/portraits/women/79.jpg"
									className="w-10 h-10 rounded-full border-2 border-white"
								/>
								<img
									src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
									className="w-10 h-10 rounded-full border-2 border-white"
								/>
								<img
									src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
									className="w-10 h-10 rounded-full border-2 border-white"
								/>
								<img
									src="https://randomuser.me/api/portraits/men/86.jpg"
									className="w-10 h-10 rounded-full border-2 border-white"
								/>
								<img
									src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
									className="w-10 h-10 rounded-full border-2 border-white"
								/>
								<p className="text-sm text-gray-400 font-medium translate-x-5">
									Join 5.000+ users
								</p>
							</div>
						</div>
					</div>
					<div
						className="absolute inset-0 my-auto h-[500px]"
						style={{
							background:
								"linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
							filter: "blur(118px)",
						}}></div>
				</div>
				<motion.div
					initial={{
						scale: 0,
						opacity: 0,
					}}
					animate={{
						scale: 1,
						opacity: 1,
					}}
					transition={{ duration: 1 }}
					className="flex-1 flex items-center justify-center h-screen">
					<div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
						<div className="">
							<GiReceiveMoney size={70} className="text-indigo-600 lg:hidden" />
							<div className="mt-5 space-y-2">
								<h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
									S'inscrire
								</h3>
								<p className="">
									Vous avez déja un compte?{" "}
									<Link
										to="/login"
										className="font-medium text-indigo-600 hover:text-indigo-500">
										{" "}
										Se connecter{" "}
									</Link>{" "}
								</p>
							</div>
						</div>

						<form onSubmit={formMik.handleSubmit} className="space-y-5">
							<div>
								<label className="font-medium">Nom et prénom</label>
								<input
									name="last_name"
									{...formMik.getFieldProps("last_name")}
									className={`${styles} ${addErrorClasses(
										formMik,
										"last_name"
									)}`}
									type="text"
								/>
								{addErrorMessage(formMik, "last_name")}
							</div>
							<div>
								<label className="font-medium">Nom d'utilisateur</label>
								<input
									name="username"
									{...formMik.getFieldProps("username")}
									className={`${styles} ${addErrorClasses(
										formMik,
										"username"
									)} ${
										custumErrors.username &&
										"border-red-400 focus:border-red-400"
									} `}
									type="text"
								/>
								{addErrorMessage(formMik, "username")}
								{custumErrors.username && (
									<div className="text-red-500 text-xs">
										{" "}
										{custumErrors.username}{" "}
									</div>
								)}
							</div>
							<div>
								<label className="font-medium">Email</label>
								<input
									type="email"
									name="email"
									className={`${styles} ${addErrorClasses(formMik, "email")} ${
										custumErrors.email && "border-red-400 focus:border-red-400"
									} `}
									{...formMik.getFieldProps("email")}
								/>
								{addErrorMessage(formMik, "email")}
								{custumErrors.email && (
									<div className="text-red-500 text-xs">
										{" "}
										{custumErrors.email}{" "}
									</div>
								)}
							</div>
							<div>
								<label className="font-medium">Mot de passe</label>
								<input
									type="password"
									name="password"
									{...formMik.getFieldProps("password")}
									className={`${styles} ${addErrorClasses(
										formMik,
										"password"
									)}`}
								/>
								{addErrorMessage(formMik, "password")}
							</div>
							<div>
								<label className="font-medium">
									Confirmation du mot de passe
								</label>
								<input
									type="password"
									name="password2"
									{...formMik.getFieldProps("password2")}
									className={`${styles} ${addErrorClasses(
										formMik,
										"password2"
									)}`}
								/>
								{addErrorMessage(formMik, "password2")}
							</div>
							<button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
								{isLoading ? <FormLoader /> : "Créer votre compte"}
							</button>
						</form>
					</div>
				</motion.div>
			</main>
		</div>
	);
};

export default Register;
