import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import {
  CCard,  CCardBody,  CCardFooter,  CCol,  CContainer,  CRow
} from '@coreui/react'

import axios from 'axios'
import ManageForm from './ManageForm'
import Footer from './Footer'
// import {AuthContext} from '../../../contextProvider/ContextProvider'

const Register = () => {

  // const {o_auth} = useContext(AuthContext)
  // const [auth, setAuth] = o_auth
  const [regUser, setRegUser] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  })
  const [error, setError] = useState({})
  const [isReg, setIsReg] = useState(false)

  const handleInput = event => {
    setRegUser({
      ...regUser, [event.target.name]: event.target.value
    })
  }  

  const handleForm = event => {
    const {name, email, password, confirmPassword} = regUser
    event.preventDefault()

    axios.post('/api/user/register', {
      name, email, password, confirmPassword, phone: '01918968668'
    })
    .then(res => {
      if(res.data.status === 'success') {
        setError({})
        setRegUser({name: '', email: '', password: '', confirmPassword: ''})
        setIsReg(true)
      }
      
      if(res.data.status === 'error') {
        setError({
          [res.data.type]: res.data.message
        })
        setIsReg(false)
      }
     })
    .catch(error => {console.log(error)})
  }

  if (isReg) {
    return <Redirect to='/login' />
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                
                <ManageForm 
                  handleForm={handleForm}
                  handleInput={handleInput}
                  data={regUser}
                  error={error}
                />

              </CCardBody>
              <CCardFooter className="p-4">
                <Footer />
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
