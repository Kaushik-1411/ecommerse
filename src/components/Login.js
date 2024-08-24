import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login =()=> {
    const [email,setEmail]= React.useState('');
    const [password, setPassword]= React.useState('');
    const navigate = useNavigate();
    useEffect(() =>{
        const auth = localStorage.getItem('user');
        if(auth) {
            navigate('/')
        }
    }, [navigate]);

    const handleLogin= async()=>{
        console.warn("email, password", email, password)
        let result = await fetch('http://localhost:5000/login',{
            method:'POST',
            body:JSON.stringify({email,password}),         //we have to stringify the email and password taki to JSON ke ander jaye.
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth));
            navigate('/');
        }else{
            alert("please enter correct details")
        }
    }
    return(
        <div className="login">
            <input type='text' className="inputBox" placeholder="Enter Email" 
            onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <input type='password' className="inputBox" placeholder="Enter Password" 
            onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            <button onClick={handleLogin} className="appbutton" type="button" style={{color: 'white'}}>Login</button>
        </div>
    );
}

export default Login