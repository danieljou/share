/** @format */

import React, { useEffect, useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "../api/AuthenticationApi";
import { CgSpinner } from "react-icons/cg";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../slices/AuthSlice";
import { encryptText } from "../utils/HashData";
const Login = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [loginUser] = useLoginMutation();
	const navigate = useNavigate();

	useEffect(() => {
		let user = null;
		try {
			user = localStorage.getItem("user");
		} catch {
			user = null;
		}

		if (user != null) {
			const newUser = JSON.parse(user);
			if (newUser.token.user.is_staff) {
				// document.location.href = '/manage'
				navigate("/manage");
			} else {
				navigate("/user");
			}
		}
	}, []);
	const Submit = async (values) => {
		setIsLoading(true);
		const { username, password } = values;
		console.log(values);
		const res = await loginUser({
			data: {
				username: encryptText(
					username,
					`${import.meta.env.VITE_CRYPTO_JS_PRIVATE_KEY}`
				),
				password: encryptText(
					password,
					`${import.meta.env.VITE_CRYPTO_JS_PRIVATE_KEY}`
				),
			},
		});
		if (res) {
			setIsLoading(false);
			if (res.error) {
				const error = res.error;
				if (error.status === 401) {
					toast.error("Login ou mot de passe incorrect");
				} else {
					toast.error("Une érreur est survenue");
				}
			} else if (res.data) {
				const data = res.data;
				toast.success("Authentification effectuée avec succès");
				localStorage.setItem("user", JSON.stringify(data));
				dispatch(loginSuccess(data));
				if (data.token.user.is_staff) {
					// document.location.href = '/manage'
					navigate("/manage");
				} else {
					navigate("/user");
				}
			}
		}
	};
	const formMik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		onSubmit: (values) => {
			Submit(values);
		},
		validationSchema: Yup.object({
			username: Yup.string()
				.required("Le nom d'utilisateur  ne peut être vide")
				.nonNullable(),

			password: Yup.string()
				.required("Le mot de passe de ne peut être vide")
				.nonNullable(),
		}),
	});
	return (
		<div className="relative">
			<main className="w-full flex">
				<div className="flex-1 flex items-center justify-center h-screen">
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
						className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
						<div className="">
							<GiReceiveMoney size={70} className="text-sky-600 lg:hidden" />
							<div className="mt-5 space-y-2">
								<h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
									Connexion
								</h3>
								<p className="">
									Vous n'avez pas un compte?{" "}
									<Link
										to="/register"
										className="font-medium text-indigo-600 hover:text-indigo-500">
										{" "}
										S'inscrire{" "}
									</Link>{" "}
								</p>
							</div>
						</div>

						<form
							onSubmit={formMik.handleSubmit}
							className="space-y-5"
							noValidate>
							<div>
								<label className="font-medium">Nom d'utilisateur</label>
								<input
									placeholder="Nom d'utilisateur"
									value={formMik.values.username}
									name="username"
									onChange={formMik.handleChange}
									onBlur={formMik.handleBlur}
									type="text"
									required
									className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                                        focus:border-indigo-600 shadow-sm rounded-lg
                                        ${
																					formMik.errors.username &&
																					formMik.touched.username &&
																					"border-red-400 focus:border-red-400"
																				}
                                        `}
								/>

								{formMik.errors.username && formMik.touched.username && (
									<div className="text-red-500 text-xs">
										{" "}
										{formMik.errors.username}{" "}
									</div>
								)}
							</div>

							<div>
								<label className="font-medium">Mot de passe</label>
								<input
									placeholder="mot de passe"
									value={formMik.values.password}
									name="password"
									onChange={formMik.handleChange}
									onBlur={formMik.handleBlur}
									type="password"
									required
									className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                                        focus:border-indigo-600 shadow-sm rounded-lg
                                        ${
																					formMik.errors.password &&
																					formMik.touched.password &&
																					"border-red-400 focus:border-red-400"
																				}
                                        `}
								/>
								{formMik.errors.password && formMik.touched.password && (
									<div className="text-red-500 text-xs">
										{" "}
										{formMik.errors.password}{" "}
									</div>
								)}
							</div>

							<button
								disabled={isLoading}
								type="submit"
								className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 text-center">
								{isLoading ? (
									<CgSpinner className="text-white animate-spin mx-auto text-2xl" />
								) : (
									" Se connecter"
								)}
							</button>
						</form>
					</motion.div>
				</div>
				<motion.div
					// initial={{
					//     translateX:'-100%'
					// }}
					// animate={{
					//     translateX:0
					// }}
					// transition={{duration:0.7}}
					className="relative flex-1 hidden items-center justify-center h-screen bg-indigo-600 lg:flex">
					<Link
						to="/"
						className="absolute z-10 -left-6 top-[50%] bg-gradient-to-tr 
                from-sky-500 to-indigo-500 p-2 rounded-full shadow-lg">
						<IoChevronBackOutline className="text-white font-bold" size={30} />
					</Link>
					<div className="relative z-10 w-full max-w-md">
						{/* <img src="https://floatui.com/logo-dark.svg" width={150} /> */}
						<motion.div
							initial={{
								x: 100,
								opacity: 0,
							}}
							animate={{
								x: 0,
								opacity: 1,
							}}>
							<GiReceiveMoney size={70} className="text-white" />
						</motion.div>
						<motion.div
							initial={{
								x: 100,
								opacity: 0,
							}}
							animate={{
								x: 0,
								opacity: 1,
							}}
							className=" mt-16 space-y-3">
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
						</motion.div>
					</div>
					<div
						className="absolute inset-0 my-auto h-[500px]"
						style={{
							background:
								"linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
							filter: "blur(118px)",
						}}></div>
				</motion.div>
			</main>
		</div>
	);
};

export default Login;
