import React from 'react'
import { useState } from 'react';
import * as Components from '../utilities';
// import Bloglist from './Bloglist'

const SignupPage = () => {
    const [signIn, toggle] = useState(true);
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup = (e) => {
        e.preventDefault();
        const data = {FirstName, LastName, email, password};
        fetch('http://localhost:8000/register', {
            method:'POST',
            headers:{ 
              'Content-Type':'application/json'
            },
            body:JSON.stringify (
             data
          )
          })

    }
    const handleSignin = (e) => {
        e.preventDefault();
        const data = {email, password};
        fetch('http://localhost:8000/login', {
            method:'POST',
            headers:{ 
              'Content-Type':'application/json'
            },
            body:JSON.stringify (
             data
          )
    })
}
      return(
          <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form onSubmit={handleSignup}>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='First Name' value = {FirstName}  onChange={(e) => setFirstName(e.target.value)}/>
                      <Components.Input type='text' placeholder='Last Name' value = {LastName}  onChange={(e) => setLastName(e.target.value)}/>
                      <Components.Input type='email' placeholder='Email' value = {email}  onChange={(e) => setEmail(e.target.value)}/>
                      <Components.Input type='password' placeholder='Password' value = {password}  onChange={(e) => setPassword(e.target.value)}/>
                      <Components.Button>Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form onSubmit={handleSignin}>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email' value = {email}  onChange={(e) => setEmail(e.target.value)}/>
                       <Components.Input type='password' placeholder='Password' value = {password}  onChange={(e) => setPassword(e.target.value)}/>
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button >Sign In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
      )
}

export default SignupPage