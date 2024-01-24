/** @format */

import React, { useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import DropDown from "./DropDown";
import SideLink2 from "./sidebar2/SideLink2";
import {
	BUISNESS_AMDIN_MENU,
	GESTIONNAIRE_DE_TAXE_MENU,
	MENU1,
	MENU2,
	REPARTITOR_MENU,
	SYSTEM_ADMIN_MENU,
} from "../utils/menu";
import SIdeGroup2 from "./sidebar2/SIdeGroup2";
import { useSelector } from "react-redux";
import { Button, Drawer } from "@material-tailwind/react";
const Side2 = () => {
	const [isToggle, setIsToggle] = useState(false);
	const user = useSelector((state) => state.auth);
	console.log("user", user);
	return (
		<div>
			<div className="w-full flex flex-row min-h-screen bg-gray-100 text-gray-800 relative">
				<aside
					className={` 
					md:sticky md:top-0 md:left-0 fixed z-20 top-0 bottom-0  
					 ${
							!isToggle && "hidden"
						}   w-72 md:shadow transform  md:block transition-transform duration-150 ease-in bg-indigo-500   ${
						isToggle &&
						"z-20    block md:relative h-screen transition delay-100"
					} `}>
					<div className=" flex items-center justify-center py-4  ">
						<div className="inline-flex">
							<Link
								to={"/"}
								className=" flex-row items-center justify-between hidden md:flex">
								<GiReceiveMoney className="text-white text-4xl" />
								{/* <div className="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">ShareTax</div> */}
							</Link>
							<button
								onClick={() => {
									setIsToggle(false);
								}}>
								<MdOutlineClose className="text-white text-4xl md:hidden" />
							</button>
						</div>
					</div>
					<div className="sidebar-content px-4 py-6  top-14">
						{user.user_infos.is_repartitor && (
							<ul className="flex flex-col w-full">
								{REPARTITOR_MENU.map((menu, index) => (
									<SIdeGroup2
										key={index}
										title={menu.title}
										links={menu.links}
									/>
								))}
							</ul>
						)}
						{user.user_infos.is_task_account_manager && (
							<ul className="flex flex-col w-full">
								{GESTIONNAIRE_DE_TAXE_MENU.map((menu, index) => (
									<SIdeGroup2
										key={index}
										title={menu.title}
										links={menu.links}
									/>
								))}
							</ul>
						)}
						{user.user_infos.is_system_admin && (
							<ul className="flex flex-col w-full">
								{SYSTEM_ADMIN_MENU.map((menu, index) => (
									<SIdeGroup2
										key={index}
										title={menu.title}
										links={menu.links}
									/>
								))}
							</ul>
						)}
						{user.user_infos.is_task_admin && (
							<ul className="flex flex-col w-full">
								{BUISNESS_AMDIN_MENU.map((menu, index) => (
									<SIdeGroup2
										key={index}
										title={menu.title}
										links={menu.links}
									/>
								))}
							</ul>
						)}
						{/* {user.user_infos.is_staff && (
							<ul className="flex flex-col w-full">
								{MENU1.map((menu, index) => (
									<SIdeGroup2
										key={index}
										title={menu.title}
										links={menu.links}
									/>
								))}
							</ul>
						)} */}
						{/* {!user.user_infos.is_staff && (
							<ul className="flex flex-col w-full">
								{MENU2.map((menu, index) => (
									<SIdeGroup2
										key={index}
										title={menu.title}
										links={menu.links}
									/>
								))}
							</ul>
						)} */}
					</div>
				</aside>
				<main className="w-full flex flex-col flex-grow  md:ml-0 transition-all duration-150 ease-in">
					<header className="header bg-white shadow py-4 px-4 sticky top-0">
						<div className="header-content flex items-center flex-row">
							<button
								onClick={() => {
									setIsToggle(true);
								}}>
								<FaBarsStaggered className="md:hidden" />
							</button>

							<div className="flex ml-auto">
								<div className="flex flex-row items-center">
									<span className="flex flex-col ml-2">
										<DropDown />
										{/* <span className="truncate w-20 font-semibold tracking-wide leading-none">John Doe</span>
                                        <span className="truncate w-20 text-gray-500 text-xs leading-none mt-1">Manager</span> */}
									</span>
								</div>
							</div>
						</div>
					</header>
					<div className="main-content  p-4">
						<Outlet />
					</div>
					<footer className="footer px-4 py-6">
						<div className="footer-content">
							<p className="text-sm text-gray-600 text-center">
								© Sinares. Tout droits reservés{" "}
							</p>
						</div>
					</footer>
				</main>
			</div>
		</div>
	);
};

export default Side2;
