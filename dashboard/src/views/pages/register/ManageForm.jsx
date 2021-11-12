import React from 'react'
import {
    CButton,
    CForm,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'


const ManageForm = ({handleForm, handleInput, data, error}) => {
    return (
        <div>
            <CForm onSubmit={handleForm}>
                <h1>Register</h1>
                <p className="text-muted">Create your account</p>
                <CInputGroup className="">
                    <CInputGroupPrepend>
                        <CInputGroupText>
                            <CIcon name="cil-user" />
                        </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleInput} 
                        placeholder="Username" 
                        autoComplete="username" 
                    />
                </CInputGroup>
                <small className="text-danger">{error && error.name}</small>

                <CInputGroup className="mt-3">
                    <CInputGroupPrepend>
                        <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleInput} 
                    placeholder="Email" 
                    autoComplete="email" 
                    />
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
                    autoComplete="new-password" 
                    />
                </CInputGroup>
                <small className="text-danger">{error && error.password}</small>

                <CInputGroup className="mt-3">
                    <CInputGroupPrepend>
                        <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                    type="password"
                    name="confirmPassword"
                    value={data.confirmPassword} 
                    onChange={handleInput}
                    placeholder="Repeat password" 
                    autoComplete="new-password" 
                    />
                </CInputGroup>
                <small className="text-danger">{error && error.confirmPassword}</small>


                <CButton type="submit" color="success" className=" mt-4 mb-3" block>Create Account</CButton>
                You Have Already an Account? Please <strong>
                <Link to='/login'>
                    <CButton color="secondary" block>Login</CButton>
                </Link>
                </strong>
            </CForm>
        </div>
    )
}

export default ManageForm
