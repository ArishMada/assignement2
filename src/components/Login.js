import React, {useRef, useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { login, useAuth} from '../firebase';



function Login() { 
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleLogin() {
        setLoading(true);
        try{
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/home")
        } catch {
            alert("Failed to login: check your credentials")
        }
       setLoading(false)
    }
    
    
    return (
        <div className="login">
            <h1>Login</h1>
            <div className="loginForm">
                <p>Email</p>
                <input ref={emailRef} placeholder="Email"/>
                <p>Password</p>
                <input ref={passwordRef} type="password" placeholder="Password"/>
            </div>

            <button disabled={loading} onClick={handleLogin}>
                Login
            </button>
            <br />
            <div>
                Don't have an account? <Link className="link" to="/signup">Sign up</Link> now.
            </div>
        </div>
    )
}

export default Login