import React, { useEffect, useState } from "react"
import {Routes, Route} from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Movies } from "./pages/Movies"
import { MovieDetails } from "./pages/MovieDetails"
import { Characters } from "./pages/Characters"
import { Error } from "./pages/Error"

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
        <Route path="/characters" element={<Characters />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
