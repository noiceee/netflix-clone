import { ArrowForwardIos } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import './register.scss'

export default function Register() {

    const [emailid, setemailid] = useState(false);
    const [password, setPassword] = useState(false);
    
    const  emailRef = useRef();
    const  passwordRef = useRef();

    function handleClick(){
        setemailid(emailRef.current.value);
        emailRef.current.value = "";
    }
    function handlePassword(){
        setPassword(passwordRef.current.value);
    }

    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="" className="logo" />
                    <button className="login-button">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className="input">
                    {emailid ? 
                            <>
                                <input type="password" placeholder='Password' ref={passwordRef}/>
                                <button className="register-button" onClick={handlePassword}>
                                    Start
                                    <ArrowForwardIos />
                                </button>
                            </>
                        :
                            <>
                                <input type="email" placeholder='Email address' ref={emailRef}/>
                                <button className="register-button" onClick={handleClick}>
                                    Get Started
                                    <ArrowForwardIos />
                                </button>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}
