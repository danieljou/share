/** @format */

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SIdeGroup2 from "../sidebar2/SIdeGroup2";
import { MENU1, MENU2 } from "../../utils/menu";
import { useSelector } from "react-redux";

const SideBar = ({ set }) => {
	const [isToggle, setIsToggle] = useState(true);
	const user = useSelector((state) => state.auth);
	console.log("user", user);
	return (
		<div className="flex">
			<div
				className={`px-[16px] ${
					isToggle ? " w-64" : "w-20"
				} top-0 left-0 border-r absolute border-gray-200 h-screen transition-all duration-300`}>
				<div className={`py-5 px-4 duration-300 ease-linear`}>
					{isToggle && "logo"}
				</div>
				<div className="flex flex-col gap-y-4">
					<div className="sidebar-content px-4 py-6 sticky top-14">
						{user.user_infos.is_staff && (
							<ul className="flex flex-col w-full">
								{MENU1.map((menu, index) => (
									<SIdeGroup2
										key={index}
										title={menu.title}
										links={menu.links}
									/>
								))}
								{/* <SideLink2 /> */}
							</ul>
						)}
						{!user.user_infos.is_staff && (
							<ul className="flex flex-col w-full">
								{MENU2.map((menu, index) => (
									<SIdeGroup2
										key={index}
										title={menu.title}
										links={menu.links}
									/>
								))}
								{/* <SideLink2 /> */}
							</ul>
						)}
					</div>
				</div>
				<div
					className="absolute top-5 -right-[14px] z-50 bg-white cursor-pointer"
					onClick={() => set(!isToggle)}>
					<span
						className={`h-[25px] w-[25px] flex justify-center items-center rounded-[50%] border duration-300 border-gray-200 ${
							isToggle && "rotate-180"
						}`}>
						{"<"}
					</span>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default SideBar;
