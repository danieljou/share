/** @format */

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MainBase from "../components/MainBase";
import Documentation from "../pages/Documentation";
import Preview from "../pages/Preview";
import DashBoard from "../pages/settings/DashBoard";
import Side2 from "../components/Side2";
import Formules from "../pages/settings/Formules";
import IsAuthenticated from "./IsAuthenticated";
import ConfigFormula from "../pages/settings/ConfigFormula";
import AddFormula from "../pages/settings/AddFormula";
import AddFormule from "../pages/settings/AddFormule";
import UserHome from "../pages/users/UserHome";
import ClientDash from "../pages/clients/ClientDash";
import RedirectUser from "../components/RedirectUser";
import OtpVerification from "../components/clients/OtpVerification";
import CreateMemberAccount from "../pages/clients/CreateMemberAccount";
import ValidationList from "../pages/users/ValidationList";
import Taxes from "../pages/settings/Taxes";
import Members from "../pages/users/Members";
import CreateTax from "../pages/settings/CreateTax";
import RepartirTaxe from "../pages/settings/RepartirTaxe";
import OperationsLists from "../pages/users/OperationsLists";
import TaskDetails from "../components/TaskDetails";
import FilterTax from "../components/FilterTax";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/account" Component={RedirectUser} />
				<Route path="/otp" Component={OtpVerification} />
				<Route path="" Component={MainBase}>
					<Route index Component={Home} />
					<Route path="/documentation" Component={Documentation} />
				</Route>
				<Route path="/register" Component={Register} />
				<Route path="/login" Component={Login} />
				<Route
					path="/user"
					element={
						<IsAuthenticated>
							{" "}
							<Side2 />{" "}
						</IsAuthenticated>
					}>
					<Route exact path="" element={<Navigate to="dashboard" />} />
					<Route path="dashboard" Component={ClientDash} />
					<Route path="create-account" Component={CreateMemberAccount} />
					<Route path="validate-account/:id" Component={OtpVerification} />
					<Route  path="operations">
						<Route exact path="" element={<Navigate to="task-details" />} />
						<Route path="list" Component={OperationsLists}/>
						<Route path="task-details" Component={TaskDetails}/>
						<Route path="filterTax" Component={FilterTax}/>
					</Route>
				</Route>
				<Route
					path="/manage"
					element={
						<IsAuthenticated>
							{" "}
							<Side2 />{" "}
						</IsAuthenticated>
					}>
					<Route exact path="" element={<Navigate to="dashboard" />} />
					<Route path="dashboard" Component={DashBoard} />
					<Route path="formules">
						<Route path="" Component={Formules} />
						<Route path="add" Component={AddFormula} />
						<Route path="config/:id" Component={ConfigFormula} />
						<Route path="config/:id/add" Component={AddFormule} />
					</Route>
					<Route path="taxes">
						<Route path="" Component={Taxes} />
						<Route path="create" Component={CreateTax} />
						<Route path="repartir/:id" Component={RepartirTaxe} />
					</Route>
				</Route>
				<Route path="/preview" Component={Preview} />
				<Route path="accounts" Component={Side2}>
					<Route exact path="" element={<Navigate to="users" />} />
					<Route path="users" Component={UserHome} />
					<Route path="validations-list" Component={ValidationList} />
					<Route path="membres" Component={Members} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
