import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import styles from "../animations/loading.module.css";

export const MovieDetails = () => {
    
    const { movieId } = useParams();
    const [loadedCont, setLoadedCont] = useState(false); // needed to check if the data is fetched, or content won't render since it is an asynchronous operation
    const [movie, setMovie] = useState([]);
    

    useEffect(() => {
        async function fetchMovieDetails() {
          try {
            const response = await fetch("https://a38af5dc737745ab8cf1f6c1e3f8b133.api.mockbin.io/");
            if (!response.ok) {
              throw new Error("Error in the HTTP request");
            }
            const data = await response.json();
            setMovie(data.films); // Update the state with movie details
            setLoadedCont(true)
            
          } catch (error) {
            console.error("Error:", error, error.message);
          }
        }
    
        fetchMovieDetails();
      }, [movieId]); // Ensure the effect runs when movieId changes

    return(
        <>
          <main className="flex items-center justify-center my-10">
            {loadedCont ? <div className="flex flex-col items-center justify-center text-center mt-10 sm:flex-row">
              <img 
                  src={movie[movieId - 1].image} 
                  alt="Film image"
                  className="w-4/5 rounded-3xl mb-8 sm:w-1/2 sm:ml-10 lg:ml-32"
              />
              <section>
                <p className="font-bold text-xl mb-5 lg:text-3xl lg:mb-10 text-yellow-300">{movie[movieId - 1].title}</p>
                <p className="mx-10 my-5 text-justify italic lg:mx-20 xl:mx-28 lg:text-lg lg:mb-10">"{movie[movieId - 1].description}"</p>
                <p className="mb-4 lg:text-lg"><span className="font-bold">Director:</span> {movie[movieId - 1].director}</p>
                <p className="mb-4 lg:text-lg"><span className="font-bold">Release date:</span> {movie[movieId - 1].release_date}</p>
              </section>
            </div> : <div className={`absolute top-1/2 ${styles.loader}`}></div>}
          </main>
          {loadedCont && <Footer/>}
        </>
    )
}