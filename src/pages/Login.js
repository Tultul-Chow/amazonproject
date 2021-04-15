import React from 'react'
import { useState} from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png'

const Login = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const validateLogin = () => {

        let isValidated = true;

        if (email === "") {
            setErrorEmail(" !Enter Your Email");
            isValidated = false;
        }

        else {
            setErrorEmail("")
        }


        if (password === "") {
            setErrorPassword(" !Enter Your Password");
            isValidated = false;
        }

        else {
            setErrorPassword("")
        }


        return isValidated;

    }
    return (
        <div className="loginLine">
        <Link to="/"><img style={{width:"100%"}} src={logo} alt=""></img></Link> 
        <div></div>
        <div class="login">

            <h1>Sign-In</h1>
             <form action="" className="col-xs-2">
                <label>Email</label><br />
                <input placeholder="email" type="text" id="filter" onChange={(event) => {

                    setEmail(event.target.value);

                }} /><br />
                <span style={{ color: "red" }}>{errorEmail}</span><br />
                <label>Password:</label><br />
                <input placeholder=" At Least 6 characters" type="text" id="filter" onChange={(event) => {
                    setPassword(event.target.value);
                }} /><br /><span style={{ color: "red" }}>{errorPassword}</span><br/>
                <button className ="button" style={{justifyItems:"center",width:"100%"}} type="button"  onClick={() => {

                    if (validateLogin()) {

                    }setEmail("");
                    setPassword("")
                }}>Login</button><br/>
            </form>
        </div >
        <div className="signUp-login"><br/>
        <p style={{fontSize:"medium"}}>---------------------New To Amazon?---------------------</p>
       <Link to="/SignUp"><button className ="button"style={{justifyItems:"center",width:"100%"}}type="button"  >Create Your Amazon Account</button></Link> </div><br/>
       <div className="footer-signUp gap">
                <a>Conditions Of Use</a>
                <a>Privacy Notice</a>
                <a>Help</a>

            </div><br/>
            <a style={{fontSize:"small",paddingLeft:"4px"}}> © Amazon. 2008-2021 . Inc. or It's affiliates</a>
        </div >
    )
}

export default Login
