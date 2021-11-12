import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
  CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CRow
} from '@coreui/react'

import { AuthContext } from 'src/contextProvider/ContextProvider'
import ManageForm from './ManageForm'
import axios from 'axios'
import { Toaster } from 'react-hot-toast';
import { errorToast, successToast } from 'src/toaster/Toaster'

// import FacebookLogin from 'react-facebook-login';

const Login = () => {

  const { o_auth } = useContext(AuthContext)
  const [auth, setAuth] = o_auth
  const [loginUser, setLoginUser] = useState({
    email: '', password: ''
  })
  const [error, setError] = useState({})

  const handleInput = event => {
    setLoginUser({
      ...loginUser, [event.target.name]: event.target.value
    })
  }

  const handleForm = event => {
    event.preventDefault()
    axios.post('/api/user/login', {
      email: loginUser.email,
      password: loginUser.password
    })
      .then(res => {
        // console.log(res.data)
        if (res.data.status === 'success') {
          successToast('Successfylly Logged in..')
          localStorage.setItem('token', res.data.token)
          setTimeout(() => {
            setAuth({
              isAuth: true,
              user: res.data.data
            })
          }, 800)
          setError({})
          setLoginUser({ email: '', password: '' })
        }

        if (res.data.status === 'error') {
          errorToast('Opps!! Sorry!.. Bad credentials')
          setError({
            [res.data.type]: res.data.message
          })
        }
      })

  }

  // const responseFacebook = (res) => {
  //   console.log(res)
  //   setAuth({
  //     isAuth: true,
  //     user: {
  //       name: res.name,
  //       email: res.email,
  //       role: 2
  //     }
  //   })
  // }


  if (auth.isAuth) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">

      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />

      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>

                  <ManageForm
                    handleForm={handleForm}
                    handleInput={handleInput}
                    data={loginUser}
                    error={error}
                  />

                  {/* <CButton className="mt-3">
                    <FacebookLogin
                      appId="554179729193729"
                      autoLoad={true}
                      fields="name,email,picture"
                      // onClick={componentClicked}
                      callback={responseFacebook}
                    />
                  </CButton> */}

                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>



            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
