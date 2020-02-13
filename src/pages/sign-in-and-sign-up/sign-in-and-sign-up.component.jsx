import React from 'react'
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import './sign-in-and-sign-up.styles.scss';

export default function SignInAndSignUpPage() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <div style={{border: ".5px solid lightgray"}}></div>
            <SignUp/>
        </div>
    )
}
