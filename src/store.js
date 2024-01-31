import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthenticationApi } from "./api/AuthenticationApi";
import AuthSlice from "./slices/AuthSlice";
import { FormulaApi } from "./api/FormulaApi";
import { DashBoardApi } from "./api/DashBoardApi";
import { UserManagementApi } from "./api/UserManegentApi";
import { TaxManagementApi } from "./api/TaxManagementApi";
import { OperationApi } from "./api/OperationApi";



export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        [AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
        [FormulaApi.reducerPath]: FormulaApi.reducer,
        [DashBoardApi.reducerPath]: DashBoardApi.reducer,
        [UserManagementApi.reducerPath]: UserManagementApi.reducer,
        [TaxManagementApi.reducerPath]: TaxManagementApi.reducer,
        [OperationApi.reducerPath]: OperationApi.reducer,

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            AuthenticationApi.middleware,
            FormulaApi.middleware,
            DashBoardApi.middleware,
            UserManagementApi.middleware,
            TaxManagementApi.middleware,
            OperationApi.middleware,

        ),
});
setupListeners(store.dispatch);
