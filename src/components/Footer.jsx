import React from "react"
import Tiktok from "../assets/Tiktok.png"
import Instagram from "../assets/Instagram.png"
import X from "../assets/X.png"
import Facebook from "../assets/Facebook.png"
import Youtube from "../assets/Youtube.png"

export const Footer = () => {

    return (
        <footer className="w-full flex justify-between relative">
            <section className="w-1/2 flex justify-center items-center text-center my-5 ">
                <ul className="font-bold md:flex-row md:flex">
                    <li className="hover:bg-white/50 px-2 py-1 rounded-lg mb-2 transition duration-500 ease-in-out md:mr-7">
                        <a href="https://www.starwars.com/" target="_blank">Oficial Page</a>
                    </li>
                    <li className="hover:bg-white/50 px-2 py-1 rounded-lg mb-2 transition duration-500 ease-in-out md:mr-7">
                        <a href="https://www.ea.com/es-es/games/starwars" target="_blank">EA Games</a>
                    </li>
                    <li className="hover:bg-white/50 px-2 py-1 rounded-lg mb-2 py-1 transition duration-500 ease-in-out">
                        <a href="https://starwars.fandom.com/wiki/Main_Page" target="_blank">Wiki</a>
                    </li>
                </ul>
            </section>
            <div className="bg-white absolute h-full w-full opacity-10 top-0 right-0 -z-10"></div>
            <section className="flex justify-center items-center w-1/2 flex-wrap flex my-5">
                <a 
                    href="https://www.tiktok.com/@starwars" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-8 m-3 hover:bg-white/30 rounded-lg transition duration-500 ease-in-out  hover:-translate-y-2 md:mr-5"
                >
                    <img src={Tiktok} alt="Tiktok icon" />
                </a>
                <a 
                    href="https://www.instagram.com/starwars/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-8 m-3 hover:bg-white/30 rounded-lg transition duration-500 ease-in-out  hover:-translate-y-2 md:mr-5"
                >
                    <img src={Instagram} alt="Instagram icon" />
                </a>
                <a 
                    href="https://twitter.com/starwars" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-8 m-3 hover:bg-white/30 rounded-lg transition duration-500 ease-in-out  hover:-translate-y-2 md:mr-5"
                >
                    <img src={X} alt="X icon" />
                </a>
                <a 
                    href="https://www.facebook.com/StarWars" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-8 m-3 hover:bg-white/30 rounded-lg transition duration-500 ease-in-out  hover:-translate-y-2 md:mr-5"
                >
                    <img src={Facebook} alt="Facebook icon" />
                </a>
                <a 
                    href="https://www.youtube.com/user/starwars" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-8 m-3 hover:bg-white/30 rounded-lg transition duration-500 ease-in-out hover:-translate-y-2 "
                >
                    <img src={Youtube} alt="Youtube icon" />
                </a>
            </section>
        </footer>
    )
}