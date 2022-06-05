import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from '../Components/Button'

export default function About() {
  const [nama, setNama] = useState("Raeza")

  const [password, setPassword] = useState("password")

  function handleChangeCheck() {
    if(password === "password") {
      setPassword("text")
    }
    if (password === "text") {
      setPassword("password")
    }
  }

  return (
    <div>
        <h1>About</h1>
        <h2>{nama}</h2>
        <input type={password} />
        <br />
        <div>
          <input type={"checkbox"} id={"check"} onChange={handleChangeCheck} />
          <label htmlFor="check">See Password</label>
        </div>
    </div>
  )
}
