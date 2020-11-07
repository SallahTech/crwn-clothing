import React from 'react'
import FormInput from '../form-input/Form-input.component'
import CustomButton from '../custom-button/Custom-button.component'
import './Sign-in.styles.scss'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state

    try {
      // await auth.createUserWithEmailAndPassword(email, password)
      await auth.signInWithEmailAndPassword(email, password)

      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />

          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
