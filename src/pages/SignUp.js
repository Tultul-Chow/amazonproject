import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import logo from "../images/logo1.png"

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const validateSignUp = () => {

        let isValidated = true;

        if (name === "") {
            setErrorName("! Enter Your Name");
            isValidated = false;
        }

        else {
            setErrorName("")
        }
        if (email === "") {
            setErrorEmail("! Enter Your e-mail");
            isValidated = false;
        }

        else {
            setErrorEmail("")
        }

        if (password === "") {
            setErrorPassword("! Enter Your Password");
            isValidated = false;
        }

        else if (!password.match(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/)) {
                setErrorPassword("! Please enter 6-12 digits");
                isValidated = false;
            }

        else {
                setErrorPassword("")
            }


        return isValidated;

    }

    return (
        <div className="signupLine">
            <Link to="/"><img src={logo} style={{ width: "50%", paddingTop: "20px", paddingLeft: "20px" }}></img></Link>
            <div className="sign-up">
                <div></div>
                <h1 >Create Account</h1><br></br>
                <div >
                    <label>Your Name</label><br></br>
                    <input placeholder="Your Name" style={{ width: "100%" }} type="text" id="filter" onChange={(event) => {

                        setName(event.target.value);

                    }} /><br></br>
                    <span style={{ color: "red" }}>{errorName}</span><br />
                    <label>Email Address:</label><br></br>
                    <input name="email" type="text" id="filter" style={{ width: "110%" }} placeholder="Enter Your Email" onChange={(event) => {

                        setEmail(event.target.value);

                    }} /><br /><span style={{ color: "red" }}>{errorEmail}</span><br />
                    <label>Password</label><br></br>
                    <input placeholder="At least 6 characters" style={{ width: "110%" }} type="text" id="filter" onChange={(event) => {

                        setPassword(event.target.value);

                    }} /><br></br>
                    <span style={{ color: "red" }}>{errorPassword}</span><br />
                    <label>Password Again</label><br></br>
                    <input placeholder="Re-enter Password" style={{ width: "110%" }} type="text" id="filter" /><br></br>

                </div>
                <br />
                <button type="button"className ="button" style={{justifyItems:"center",width:"55%",fontSize:"15px"}} onClick={() => {

                    if (validateSignUp()) {
                    }
                    setEmail("");
                    setName("");
                    setPassword("");
                }}>Create Your Amazon Account</button><br />

                <h4 style={{ fontSize: "10px", paddingLeft: "10px" }}>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</h4>
                <br />
            </div><br />
            <div className="footer-signUp gap">
                <a>Conditions Of Use</a>
                <a>Privacy Notice</a>
                <a>Help</a>

            </div>
            <a style={{fontSize:"small",paddingLeft:"70px"}}> © Amazon. 2008-2021 . Inc. or It's affiliates</a>
        </div>

    )
}

export default SignUp
