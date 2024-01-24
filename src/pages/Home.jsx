/** @format */

import React, { useState } from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import { SERVICES } from "../utils/services";
import { Services } from "../components/Services";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<>
			<Header2 />
			<div className="relative md:px-24">
				<section id="fonctionnalities" className="bg-white dark:bg-gray-900">
					<div className="h-32"></div>
					<div className="container px-6 py-6 mx-auto">
						<div className="mt-6 md:flex md:items-center md:justify-between">
							<div>
								<h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
									Fonctionnalités
								</h1>

								<div className="flex mx-auto mt-6">
									<span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
									<span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
									<span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
								</div>
							</div>
						</div>
						<div className="h-20"></div>
						<div
							className="grid w-full grid-cols-1 gap-16 p-2 
                            md:grid-cols-1   xl:grid-cols-2 ">
							{SERVICES.map((service, key) => (
								<motion.div
									initial={{
										scale: 0,
										opacity: 0,
									}}
									whileInView={{
										scale: 1,
										opacity: 1,
									}}
									transition={{ duration: 2 * (1 / (key + 2)) }}
									className="h-full"
									key={key}>
									<Services service={service} />
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<div className="h-32" id="testimonies"></div>
			</div>
			<div className="md:px-24">
				<Reviews />
			</div>
		</>
	);
};

export default Home;
