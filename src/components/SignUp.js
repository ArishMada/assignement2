import React, {useRef, useState} from 'react'
import { Link } from "react-router-dom";
import { signup, useAuth, logout} from '../firebase';



function SignUp() { 
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup() {
        setLoading(true);
        try{
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            if (emailRef.current.value.trim() === ""|| passwordRef.current.value.trim() === ""){
                alert("Error! The fields are empty.")
            }else {
                alert("Error! This address is already used.")
            }
        }
       setLoading(false)
    }
    
    return (
        <div className="signup">
            <h1>SignUp</h1>
            <div className="signupForm">
                <p>Email</p>
                <input ref={emailRef} placeholder="Email"/>
                <p>Password</p>
                <input ref={passwordRef} type="password" placeholder="Password"/>
            </div>

            <button disabled={loading} onClick={handleSignup}>
                Sign up
            </button>
            <br />
       
            <div>
            Already have an account? <Link className="link" to="/">Login</Link> now.
            </div>
        </div>
    )
}

export default SignUp