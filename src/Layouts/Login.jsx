import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

//Style
import {PageWrapper} from '../Style/LoginStyle'


export default function Login({setUserData : updateUserData}) {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({username:"Niswati", password:"Barika"})
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) =>{
        // console.log(e.target.name)
        const {name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // const str = `
        // username: ${userData.username}
        // password: ${userData.password}
        // `
        // alert(str)
        // updateUserData(userData)
        localStorage.setItem("loginData", JSON.stringify(userData))
        navigate("/")
    }

    const handleShowPassword = () =>{
        setShowPassword(!showPassword)
    }

    const handleDeleteLocalStorage =() =>{
        localStorage.clear()
    }

    // console.log("userData", userData)

    // const cStyle = `
    //     font-size:50px;
    //     .title {
    //         font-size:100px;
    //     }
    // `

  return (
    // <PageWrapper cStyle={cStyle}>
    <PageWrapper >
        {/* <div className='hero' >
            ini hero
            <p>ini p</p>
            <div className='title'>INi Title</div>
        </div> */}
        <form style={{marginTop:"100px"}} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username" style={{marginRight:"20px"}} >Username:</label>
                <input type="text" id="username" name="username" onChange={handleChange} value={userData.username || ""} />
            </div>
            <div style={{marginTop:"20px"}}>
                <label htmlFor="password" style={{marginRight:"20px"}} >Password:</label>
                <input type={!showPassword? "password":"text"} id="password" name="password" onChange={handleChange} value={userData.password || ""} />
            </div>
            <br />
            <div onClick={handleShowPassword}>Show Password</div>
            <br />
            <button type='submit'>Submit</button>
        </form>

        <button onClick={handleDeleteLocalStorage}>Delete local Storage</button>
        {/* <Form className='container d-flex flex-column'>
            <Form.Group className="mb-3 row" controlId="formBasicEmail">
                <Form.Label className="col-2" >Email address</Form.Label>
                <div className="col-6" >
                    <Form.Control  type="email" placeholder="Enter email" />
                </div>
            </Form.Group>

            <Form.Group className="mb-3 row" controlId="formBasicPassword">
                <Form.Label className='col-2'>Password</Form.Label>
                <div className='col-6'>
                    <Form.Control  type="password" placeholder="Password" />
                </div>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form> */}
    </PageWrapper>
  )
}
