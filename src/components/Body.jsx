import React, { useRef, useEffect, useState } from "react"
import "react-intersection-observer"
import Background from "../assets/Background.jpg"
import Video from "../assets/Darth-Kenobi.mp4"

export const Body = () => {

    // The following code is related to Intersection Observer API to make animations based on the visibility of elements on screen

    const useIntersectionObserver = () => {
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
    
    // eRef is used as "ref" in the animated elements being observed

    const [eRef, observed] = useIntersectionObserver();
    const [eRef2, observed2] = useIntersectionObserver();
    const [eRef3, observed3] = useIntersectionObserver();
    const [eRef4, observed4] = useIntersectionObserver();
    const [eRef5, observed5] = useIntersectionObserver();
    
    return (
        <main className="">
            <section
                className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center relative" 
                style={{backgroundImage: `url(${Background})`}}
            >
                <div
                    ref={eRef5}
                    className={`absolute h-full w-full bg-black opacity-35 ${observed5? "opacity-50 transition duration-1000 ease-in" : "opacity-100"}`}
                >
                </div>
                <h1 
                    ref={eRef} 
                    className={`text-4xl font-bold m-8 text-center absolute top-1/4 md:text-6xl ${observed? "opacity-1 scale-100 transition duration-1000 ease-out" : "opacity-0 scale-0"}`} 
                    style={{textShadow: "5px 5px 20px rgba(255, 255, 255, 0.65)"}}
                >Welcome to my Star Wars fan page!
                </h1>
            </section>
            <section className="flex flex-col items-center justify-center">
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
                    className={`object-cover aspect-square h-80 w-5/6 -mt-10 sm:mt-0 sm:h-96 mb-10 ${observed4? "opacity-1 translate-x-0 transition duration-1000 ease-in-out" : "opacity-0 -translate-x-32"}`}
                    style={{borderRadius: "50px", height: window.innerWidth >= 768 ? "500px" : "320px"}}
                >
                    <source src={Video}/>
                </video>
            </section>
        </main>
    )
}