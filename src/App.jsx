import { useState } from 'react'
import CardSlider from './components/CardSlider'
import './App.css'
import im1 from "./assets/download.jpg"
import im2 from "./assets/83c5b17bf074faacf9bc584c28e0a94d.jpg"
import im3 from "./assets/af64104c89df757344bc3051215d085c.jpg"
import im4 from "./assets/photo-1576430817064-1ca29aebe784.jpg"
import im5 from "./assets/photo-1636499017816-bd34ac2e9f67.jpg"

const slides = [
  {id:1, img: im1}, {id:2, img: im2}, {id:3, img: im3}, {id:4, img: im4}, {id:5, img: im5}
]

function App() {

  return (
    <>
      <CardSlider slides={slides}/>
    </>
  )
}

export default App
