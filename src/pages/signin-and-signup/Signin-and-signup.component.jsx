import React from 'react'

import SignIn from '../../components/sign-in/Sign-in.component'
import SignUp from '../../components/sign-up/Sign-up.component'
import './Signin-and-signup.styles.scss'

const SigiInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default SigiInAndSignUpPage
