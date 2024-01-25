import React from "react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { useIntersectionObserver } from "./Body";
import styles from "../animations/loading.module.css";

export const MoviesBox = () => {

    const [movies, setMovies] = useState([]);
    const [loadedCont, setLoadedCont] = useState(false); // to render the Footer ONLY after the data is received and rendered

    const [eRef, observed] = useIntersectionObserver();
    const [eRef2, observed2] = useIntersectionObserver();

    useEffect(() => {
        async function callMovies() {
            try {
                const response = await fetch('https://a38af5dc737745ab8cf1f6c1e3f8b133.api.mockbin.io/'); // made with Mock API
                if (!response.ok) {
                    throw new Error("Error in the HTTP request")
                }
                const data = await response.json();
                setMovies(data.films) // "films" is the key in the object where the movies are contained in the incoming data
                setLoadedCont(true)
            } catch (error) {
                console.error('Error:', error, error.message);
            }
          }

        callMovies()
    }, []);

  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <h1 
          ref={eRef}
          className={`text-4xl font-bold my-10 ${observed ? "opacity-100 transition duration-1000 ease-in" : "opacity-0 transition duration-1000 ease-in"}`}
          style={{textShadow: "5px 5px 20px rgba(255, 255, 255, 0.65)"}}
        >Star Wars Movies
        </h1>
        <p 
          ref={eRef2}
          className={`mb-12 ${observed2 ? "opacity-100 translate-y-0 transition duration-700 ease-in" : "opacity-0 translate-y-10 ease-in transition duration-700"}`}
          >Click each movie to see its details!
          </p>
        {loadedCont ? <ul className="flex flex-col justify-center items-center sm:flex-row sm:flex-wrap">
          {movies.map((movie) => (
            // <MovieCard key={movie.id}  movie={movie.title} />
            <li className="w-3/5 mb-10 transition duration-500 hover:-translate-y-6 hover:duration-500 hover:transition sm:w-1/4 sm:m-6" key={movie.id}>
              <Link 
                to={"/movies/" + movie.id} 
                className="flex flex-wrap items-center justify-center"
              > 
                <img
                src={movie.image}
                alt={movie.title}
                className="w-full rounded-2xl mb-4 md:w-5/6 border"
                />
                <p className="text-xl text-center font-bold sm:text-lg lg:text-xl">{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul> : <div className={styles.loader}></div>}
      </main>
      {loadedCont && <Footer/>}
    </>
  );
}