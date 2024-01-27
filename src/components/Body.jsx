import React, { useRef, useEffect, useState } from "react"
import "react-intersection-observer"
import Background from "../assets/Background.jpg"
import Video from "../assets/Darth-Kenobi.mp4"
import { Footer } from "./Footer"
import styles from "../animations/stars-bg.module.css";

// The following code is related to Intersection Observer API to make animations based on the visibility of elements on screen

export const useIntersectionObserver = () => {
    const [observed, isObserved] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false); // to stop the observation after the first time
    const eRef = useRef();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
          };
        
        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasIntersected) { // entry.isIntersecting will be true or false
                    isObserved(true) // if entry is being observed, state is updated
                    setHasIntersected(true)
                } 
            });
        };
        
        const observer = new IntersectionObserver(callback, options);
    
        if (eRef.current) {
            observer.observe(eRef.current)
        };

        return () => {
            if (eRef.current) {
                observer.unobserve(eRef.current);
            }
        }

    }, [])

    return [eRef, observed]
}

export const Body = () => {

    
    // eRef is used as "ref" in the animated elements being observed

    const [eRef, observed] = useIntersectionObserver();
    const [eRef2, observed2] = useIntersectionObserver();
    const [eRef3, observed3] = useIntersectionObserver();
    const [eRef4, observed4] = useIntersectionObserver();
    const [eRef5, observed5] = useIntersectionObserver();
    const [eRef6, observed6] = useIntersectionObserver();
     
    return (
        <>
        <main>
            <section
                className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center relative" 
                style={{backgroundImage: `url(${Background})`}}
            >
                <div
                    ref={eRef5}
                    className={`absolute top-0 left-0 h-full w-full bg-black ${observed5 ? "opacity-50 transition duration-2000 ease-in" : "opacity-100"}`}
                >
                </div>
                <h1 
                    ref={eRef} 
                    className={`text-4xl font-bold m-8 text-center absolute top-1/4 md:text-6xl ${observed? "opacity-1 scale-100 transition duration-1000 ease-out" : "opacity-0 scale-0"}`} 
                    style={{textShadow: "5px 5px 20px rgba(255, 255, 255, 0.65)"}}
                >Welcome to my Star Wars fan page!
                </h1>
            </section>
            <section className="flex flex-col items-center justify-center relative mb-10">
                <h2 
                    ref={eRef2} 
                    className={`text-2xl font-bold text-yellow-300 mt-5 sm:text-4xl ${observed2? "opacity-1 translate-y-0 transition duration-1000 ease-out" : "opacity-0 -translate-y-14"}`}
                >What's the purpose of this page?
                </h2>
                <p 
                    ref={eRef3} 
                    className={`m-12 md:mx-40 md:text-lg ${observed3? "opacity-1 translate-y-0 transition duration-1000 ease-in" : "opacity-0 translate-y-14"}`}
                >I can't say I'm the greatest fan of Star Wars. At the beginning didn't understand the hype about it, and I don't like the movies order, since I prefer lineal order for consistency in histories written with a great time gap. However, one thing changed my mind: I played <span className="font-bold">Star Wars: Jedi Fallen Order</span>. It was an amazing experience, and I saw how it is connected to the story because a widely known character appears at some point of the game. <br /><br />From this point on, I decided I would give Star Wars a chance. Check the <span className="italic font-bold">Movies</span> and <span className="italic font-bold">Characters</span> sections for more information about Star Wars. Besides, one of the best thing about Star Wars are the lightsaber fights. You don't believe me? Then check the video below!
                </p>
                <video
                    ref={eRef4}
                    controls 
                    muted 
                    className={`object-cover aspect-square h-80 w-5/6 -mt-10 sm:mt-0 sm:h-96 ${observed4? "opacity-1 translate-x-0 transition duration-1000 ease-in-out" : "opacity-0 -translate-x-32"}`}
                    style={{borderRadius: "50px", height: window.innerWidth >= 768 ? "500px" : "320px"}}
                >
                    <source src={Video}/>
                </video>
                <p  
                    ref={eRef6} 
                    className={`mx-12 my-7 md:mx-40 md:text-lg ${observed6? "opacity-1 translate-y-0 transition duration-1000 ease-in" : "opacity-0 translate-y-14"}`}
                >
                    This page only contains Star Wars information prior to Disney adquisition. Latest movies and characters are not contained here. Most of the information was taken from the Star Wars API <a href="https://swapi.dev/" className="font-bold text-yellow-300" target="_blank">(SWAPI)</a>, while images, from <a href="https://starwars-visualguide.com/#/" className="font-bold text-yellow-300" target="_blank">Star Wars: A Visual Guide</a>; that data was modified to fit my needs on this web page.
                </p>
                <p ref={eRef6} 
                    className={`mx-12 my-5 md:mx-40 md:text-lg text-center ${observed6? "opacity-1 translate-y-0 transition duration-1000 ease-in" : "opacity-0 translate-y-14"}`}
                >
                    Made by <a href="https://www.linkedin.com/in/georgematos20/" className="font-bold text-yellow-300" target="_blank">George Matos</a>.
                </p>
            </section>
        </main>
        <Footer />
        </>
    )
}