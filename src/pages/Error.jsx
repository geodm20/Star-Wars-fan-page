import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
    
    return (
        <div className="flex flex-col justify-center items-center relative top-1/4 lg:-mt-10">
            <h1 className="text-9xl text-yellow-300 font-bold tracking-widest mb-7">404</h1>
            <h2 className="text-2xl mx-10 text-center mb-10">Sorry, the page you were looking for does not exist.</h2>
            <Link
                to="/"
                className="text-lg bg-white/30 py-3 px-5 rounded-3xl transition duration-300 ease-in hover:scale-110 hover:text-yellow-300 hover:bg-white/20"
            >
                Return to Home page
            </Link>
        </div>
    )
}