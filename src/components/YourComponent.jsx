/** @format */

import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const itemsPerPage = 17; // Número de elementos por página

export const Pagination = ({ data, Component }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

	const totalPages = Math.ceil(data.length / itemsPerPage);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const halndleBack = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	const halndleForward = () => {
		if (currentPage !== totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<div>
			{/* <h2>Current Page: {currentPage}</h2> */}

			{/* Renderizar los elementos actuales */}
			{currentItems.map((item) => (
				<Component data={item} key={item} />
			))}

			{/* Renderizar los botones de paginación */}
			{data.length > 0 && data.length > itemsPerPage && (
				<div className="gap-2 flex items-center my-5 ">
					<button
						onClick={halndleBack}
						className="bg-white shadow-md p-2 w-10 h-10  mx-2 rounded-full flex justify-center items-center hover:bg-blue-400 hover:text-white ">
						<FaAngleLeft />
					</button>

					{Array.from({ length: totalPages }).map((_, index) => (
						<button
							className={`p-2 w-10 h-10  mx-2 rounded-full ${
								currentPage === index + 1
									? "bg-indigo-500 text-white"
									: " bg-white shadow-md"
							}`}
							key={index}
							onClick={() => paginate(index + 1)}>
							{index + 1}
						</button>
					))}
					<button
						onClick={halndleForward}
						className="bg-white shadow-md p-2 w-10 h-10  mx-2 rounded-full flex justify-center items-center hover:bg-blue-400 hover:text-white ">
						<FaAngleRight />
					</button>
				</div>
			)}
		</div>
	);
};

const YourComponent = () => {
	// Crear un array de números del 1 al 100
	const data = Array.from({ length: 100 }, (_, index) => index + 1);

	return (
		<div>
			<h1>Your Component</h1>
			<Pagination data={data} />
		</div>
	);
};

export default YourComponent;
