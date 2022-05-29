import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '../Components/Button'

export default function Home() {

    const [userData, setUserData] = useState({loading: true})
    const [service, setService] = useState(["CUci Baju", "Cuci "])
    // let userData={name:"John", age: 25}

    // setTimeout(()=>{
    //   setUserData({loading: false})
    // },5000)

    // useEffect(()=>{
    //     // if (userData.name.length > 8) alert("OOps, char must be under 8")
    //     console.log("test")
    //     // if (!userData.loading) setUserData({...userData, name:"Niswati", age:25})
    // },[userData])

    useEffect(()=>{
      console.log("hello")
    })


    let data = {
      nama:"",
      email:"",
      umur:""
    }

    function handleChange(e) {
      const {id, value} = e.target
      // const {email} = data
      // console.log(email)

      setUserData({
        ...userData,
        [id]: value
      })

      // userData = {
      //   ...userData,
      //   [id]: value
      // }


      // data = {
      //   ...data,
      //   [id]: value
      // }
      // if (e.target.id === "email") {
      //   data.email = e.target.value
      // }
      // if (e.target.id === "name") {
      //   data.name = e.target.value
      // }

    }

    function handleSubmit(e) {
      e.preventDefault()
      // alert(email)
      console.log(data)
      const str = `
        asjasd: ${data.name}
        email: ${data.email}
      `
      alert(str)
    }

    const food = ["Ayam", "ikan", "telur", "risol"]

  return (
    <div>
        <h1>Home</h1>
        {/* {
          data.loading && 
          <div>Loading...</div>
        } */}
        {/* <ul>
          {
            food.map((item, index)=>{
              return (
                <li>{item}</li>
              )
              })
          }
        </ul> */}
        {/* {
          userData && 
          <div>
            <h4>Nama: {userData.name}</h4>
            <h4>Email: {userData.email}</h4>
            <h4>Umur: {userData.age}</h4>
          </div>
        } */}

        {
          userData.loading ?
          <div>Loading....</div>
          :
          <div>
            <h4>Nama: {userData.name}</h4>
            <h4>Umur: {userData.age}</h4>
          </div>
        }
        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id={"name"} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id={"email"} onChange={handleChange} />
          </div>
          <Button title={"Submit"} cStyle={{color:"red"}}  />
        </form>
        <Link to={"/about"} >about</Link>
    </div>
  )
}
