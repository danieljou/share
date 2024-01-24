import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { useGetTokenExpiryQuery } from "../api/UserApi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const IsAuthenticated = ({ children }) => {
    const user = useSelector((state) => state.auth);
    console.log("USER : ",user);
    const location = useLocation();
    const path = location.pathname;
    // const { data, isError, refetch, isLoading } = useGetTokenExpiryQuery();


    // useEffect(() => {
    //     const checkTokenExpiry = () => {
    //         // console.log(data);
    //         if (!isLoading && isError) {
    //             toast.error('Votre session à expiré')
    //             localStorage.removeItem('user'); // Clear the token from local storage or state
    //             window.location.href = `/login`; // Redirect to the login page
    //         }
    //     };

    //     // Perform initial check
    //     checkTokenExpiry();

    //     // Set up interval to refetch token expiry every 5 minutes
    //     const interval = setInterval(refetch, 5 * 60 * 1000);

    //     // Clean up the interval on component unmount
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [data, isError, refetch, isLoading]);
    return (
        <>
            {user.isLogin ?
                (
                    <>{children}</>
                ) :
                (
                    <>
                        <Navigate to={`/login`} />
                    </>
                )}
        </>
    );
};

export default IsAuthenticated;
