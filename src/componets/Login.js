import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
// it hooks and useNavigate() it function
   const navigate = useNavigate();
    function onSubmit(){
        navigate('/dashbord');
    }
    return <>
    <h1>Login Page</h1>
    <button onClick={onSubmit}>Login</button>
    </>
}