import React, { useEffect, useState } from "react"
import {Routes, Route} from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Movies } from "./pages/Movies"
import { MovieDetails } from "./pages/MovieDetails"

function App() {

  useEffect(() => {

  })

  return (
    <div className='h-screen bg-black font-roboto'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
