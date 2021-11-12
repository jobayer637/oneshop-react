import React from 'react'
import {
    CButton,
    CCol,
    CForm,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CRow
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'

function ManageForm({handleForm, handleInput, data, error}) {
    return (
        <div>
            <CForm onSubmit={handleForm}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleInput} 
                        placeholder="User Email" 
                        autoComplete="email" />
                    </CInputGroup>
                    <small className="text-danger">{error && error.email}</small>
                    
                    <CInputGroup className="mt-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleInput} 
                        placeholder="Password" 
                        autoComplete="current-password" 
                      />
                    </CInputGroup>
                    <small className="text-danger">{error && error.password}</small>


                    <CRow className="mt-4">
                      <CCol xs="6">
                        <CButton type="submit" color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
        </div>
    )
}

export default ManageForm
