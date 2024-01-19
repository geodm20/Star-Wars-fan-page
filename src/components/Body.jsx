import React from "react"
import Background from "../assets/Background.jpg"
import Video from "../assets/Darth-Kenobi.mp4"

export const Body = () => {

    return (
        <main className="">
            <section className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center relative" style={{backgroundImage: `url(${Background})`}}>
                <div className="absolute h-full w-full bg-black opacity-35"></div>
                <h1 className="text-4xl font-bold m-8 text-center absolute top-1/4 md:text-6xl" style={{textShadow: "5px 5px 20px rgba(255, 255, 255, 0.65)"}}>Welcome to my Star Wars fan page!</h1>
            </section>
            <section className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-yellow-300 mt-5 sm:text-4xl">What's the purpose of this page?</h2>
                <p className="m-12 md:mx-40 md:text-lg">I can't say I'm the greatest fan of Star Wars. At the beginning didn't understand the hype about it, and I don't like the movies order, since I prefer lineal order for consistency in histories written with a great time gap. However, one thing changed my mind: I played <span className="font-bold">Star Wars: Jedi Fallen Order</span>. It was an amazing experience, and I saw how it is connected to the story because a widely known character appears at some point of the game. <br /><br />From this point on, I decided I would give Star Wars a chance. Check the <span className="italic font-bold">Movies</span> and <span className="italic font-bold">Characters</span> sections for more information about Star Wars. Besides, one of the best thing about Star Wars are the lightsaber fights. You don't believe me? Then check the video below!</p>
                <video controls muted className="object-cover aspect-square h-80 w-5/6 -mt-10 sm:mt-0 sm:h-96 mb-10 rounded-3xl">
                    <source src={Video}/>
                </video>
            </section>
        </main>
    )
}