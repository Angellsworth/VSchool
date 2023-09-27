import { useState, useContext } from "react"
import AuthForm from "./AuthForm"
import { UserContext } from "../context/userProvider"
// import { useNavigate } from "react-router-dom"

const initInputs = {username: "", password: ""}

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)
  // const navigate = useNavigate()

  const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target 
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
      login(inputs)
    // navigate(
    //   "/profile"
    // )
  }
  function toggleForm(){
    setToggle(prev => !prev)
    resetAuthErr()
  }

  return(
  <div className="auth-container">
    
    <h1 className="authH1">Login or Sign up</h1>
    <br />
    { !toggle ? 
    <>
    <h2>Signup Below</h2>
      <AuthForm
        handleChange={handleChange}
        handleSubmit={handleSignup}
        inputs={inputs}
        btnTxt="Sign up"
        errMsg={errMsg}
      /> 
      <p className="authToggle"onClick={toggleForm}>Already a member?</p>
    </>
    :
    <>
    <h2>Login Below</h2>
      <AuthForm
        handleChange={handleChange}
        handleSubmit={handleLogin}
        inputs={inputs}
        btnTxt="Login"
        errMsg={errMsg}
      /> 
      <p className="authToggle"onClick={toggleForm}>Not a member?</p>
    
    </>
    }
    
  </div>
  
  )
}