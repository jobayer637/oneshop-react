import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'

import { AuthContext } from 'src/contextProvider/ContextProvider'


function ProtectedRoute({component: Component, ...rest}) {
    const {o_auth} = useContext(AuthContext)
    const [auth] = o_auth
    // const isAuth = true
    return <Route {...rest} render={(props) => {
            return auth.isAuth 
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }} />
        }}/>
}

export default ProtectedRoute
