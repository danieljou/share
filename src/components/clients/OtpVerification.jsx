/** @format */

import React, { useState } from "react";
import FormLoader from "../FormLoader";
import { useNavigate, useParams } from "react-router-dom";
import { useVerifyOtpMutation } from "../../api/DashBoardApi";
import toast from "react-hot-toast";

const OtpVerification = () => {
	const [verifyOtp] = useVerifyOtpMutation();
	const { id } = useParams();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [otp, setOtp] = useState(["", "", "", ""]);
	const handleInputChange = (index, e) => {
		// Your logic for handling input change

		// Pass focus to the next input (if available)
		const nextInput = document.getElementById(`otp-input-${index + 1}`);
		let local = [...otp];
		local[index - 1] = e.target.value;
		setOtp(local);
		if (nextInput && e.target.value !== "") {
			nextInput.focus();
		}
	};
	const hanleSubmit = async (e) => {
		e.preventDefault();
		// console.log("otp", otp.join(""));
		setIsLoading(true);
		const res = await verifyOtp({
			data: { user_entered_otp: otp.join("") },
			id: id,
		});
		if (res) {
			setIsLoading(false);
			if (res.data) {
				toast.success("Compte activé avec susscès");
				navigate("user");
			} else if (res.error) {
				if (res.error.status === 400) {
					toast.error("Otp invalide");
				} else if (res.error.status === 404) {
					toast.error("Compte invalide");
				} else {
					toast.error("Une erreur esr survenu");
				}
			}
		}
	};
	return (
		<div>
			<div className="mx-auto flex w-full max-w-md flex-col space-y-16 bg-white p-8 rounded-lg">
				<div
					className="flex flex-col items-center 
                        justify-center text-center space-y-2 ">
					<div className="font-semibold text-3xl">
						<p>Vérification du compte</p>
					</div>
					<div className="flex flex-row text-sm font-medium text-gray-400">
						<p>
							Vous avez demandez à confirmer le compte pour votre institution
						</p>
					</div>
				</div>

				<div>
					<form onSubmit={hanleSubmit}>
						<div className="flex flex-col space-y-16">
							<div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
								<div className="w-16 h-16 ">
									<input
										className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
										type="text"
										name=""
										maxLength="1"
										onChange={(e) => handleInputChange(1, e)}
										id="otp-input-1"
									/>
								</div>
								<div className="w-16 h-16 ">
									<input
										className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
										type="text"
										name=""
										maxLength="1"
										onChange={(e) => handleInputChange(2, e)}
										id="otp-input-2"
									/>
								</div>
								<div className="w-16 h-16 ">
									<input
										className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
										type="text"
										name=""
										maxLength="1"
										onChange={(e) => handleInputChange(3, e)}
										id="otp-input-3"
									/>
								</div>
								<div className="w-16 h-16 ">
									<input
										className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
										type="text"
										name=""
										maxLength="1"
										onChange={(e) => handleInputChange(4, e)}
										id="otp-input-4"
									/>
								</div>
							</div>

							<div className="flex flex-col space-y-5">
								<div>
									<button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
										{isLoading ? <FormLoader /> : "Verifier le compte"}
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default OtpVerification;
