import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Components/Button'

export default function About() {
  const nama = "Raeza"
  return (
    <div>
        <h1>About</h1>
        <h2>{nama}</h2>
        <div>
          <Button title={"Go to Home"} to={"/"}/>
        </div>
        <Link to={"/"} style={{textDecoration:"none", color:"black"}} >Home</Link>
    </div>
  )
}
