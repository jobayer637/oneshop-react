import React, { Suspense } from 'react'
import {
  Redirect,
  Switch
} from 'react-router-dom'
import { CContainer } from '@coreui/react'



import ProtectedRoute from 'src/protectedRoute/ProtectedRoute'
// routes config
import routes from '../routes'

// const Dashboard = React.lazy(() => import('src/views/dashboard/Dashboard'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {/* <ProtectedRoute path="/dashboard" exact component={Dashboard} /> */}
            {routes.map((route, idx) => {
              return route.component && (
                <ProtectedRoute
                  key={idx}
                  path={route.path}
                  exact
                  name={route.name}
                  component={route.component}
                />
              )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
