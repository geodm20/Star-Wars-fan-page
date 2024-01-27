import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import StarWarsLogo from "../assets/StarWarsLogo.png"
import Obi from "../assets/Obi.png"

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false) // state for the hamburger menu
    const [desktopView, setDesktopView] = useState(window.innerWidth >= 900) // state to evaluate the width of viewport and will change every time the value changes, using useEffect

    // The following state chand function changes the color of the Header menu buttons depending on which is clicked

    const [activeMenu, setActiveMenu] = useState("home")
    const changeMenu = (menu) => {
        setActiveMenu(menu)
        turnOffMenu() // turns off the menu everytime any Menu Option is clicked
    }

    useEffect(() => {
        function watchWidth() {
            setDesktopView(window.innerWidth >= 900)
            console.log(desktopView)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [desktopView])


    function turnOnMenu() {
        setMenuOpen(true);
    }

    function turnOffMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="flex justify-between w-full relative top-0 right-0">
            <section className="p-3" >
                <Link 
                    to="/"
                    onClick={() => {changeMenu("home")}}
                >
                    <img 
                    src={StarWarsLogo} 
                    alt="Star Wars Logo" 
                    className="w-28 md:w-44 cursor-pointer"/>
                </Link>
            </section>
            <section className="absolute right-1/2 translate-x-1/2">
                <img 
                    src={Obi} 
                    alt="Obi Wan Kenobi" 
                    className="w-20 md:w-32" 
                    style={{marginTop: window.innerWidth < 768? "3px": ""}}
                />
            </section>
            <section className="absolute top-0 right-0 md:h-full">
                {/* The menu icons will appear only when width is < 900 */}
                {(!desktopView && !menuOpen) && <div className="cursor-pointer absolute top-8 right-6 transition" onClick = {turnOnMenu}>
                    {/* This div is for the hamburger menu */}
                    <div className="w-10 h-1 bg-yellow-300 mb-2 rounded-lg"></div>
                    <div className="w-10 h-1 bg-yellow-300 mb-2 rounded-lg"></div>
                    <div className="w-10 h-1 bg-yellow-300 rounded-lg"></div>
                </div>}
                {(!desktopView && menuOpen) && <div className="cursor-pointer top-8 right-6 fixed transition z-20 fixed" onClick = {turnOffMenu}>
                    {/* This div is for the "X" button of hamburger menu. Will be rendered only if menuOpen is true */}
                    <div className="w-10 h-1 bg-yellow-300 rounded-lg rotate-45 translate-y-3"></div>
                    <div className="w-10 h-1 bg-yellow-300 rounded-lg -rotate-45 translate-y-2"></div>
                </div>}
                {(desktopView || menuOpen) && <ul className="bg-black flex flex-col items-center justify-center gap-16 px-5 py-7 w-screen h-screen fixed -top-0 right-0 opacity-90 z-10 md:bg-transparent md:w-auto md:h-auto md:flex-row md:gap-5 md:h-full md:static">
                    <li 
                        className={`text-3xl rounded-3xl transition duration-500 ease-in-out py-2 font-bold hover:bg-white/50 hover:-translate-x-1 hover:translate-y-1 md:text-xl ${activeMenu == "home" ? "text-yellow-300" : "text-white"}`} 
                        onClick={() => {changeMenu("home")}}
                    >
                        <Link 
                            to="/"
                            className="px-5 py-2"
                        >Home
                        </Link>
                    </li>
                    <li 
                        className={`text-3xl rounded-3xl transition duration-500 ease-in-out py-2 hover:bg-white/50 hover:-translate-x-1 hover:translate-y-1 md:text-xl font-bold ${activeMenu == "movies" ? "text-yellow-300" : "text-white"}`} 
                        onClick={() => {changeMenu("movies")}}
                    >
                        <Link 
                            to="/movies" 
                            className="px-5 py-2"
                        >Movies
                        </Link>
                    </li>
                    <li 
                        className={`text-3xl rounded-3xl transition duration-500 ease-in-out py-2 hover:bg-white/50 hover:-translate-x-1 hover:translate-y-1 md:text-xl font-bold ${activeMenu == "characters" ? "text-yellow-300" : "text-white"}`} 
                        onClick={() => {changeMenu("characters")}}
                    >
                        <Link 
                            to="/characters" 
                            className="px-5 py-2"
                        >Characters
                        </Link>
                    </li>
                </ul>}
            </section>
        </header>
    )
}