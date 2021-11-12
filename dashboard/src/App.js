import React, { useEffect, useContext } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import axios from 'axios';

// import ProtectedRoute from './protectedRoute/ProtectedRoute';
import { AuthContext } from './contextProvider/ContextProvider';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));


const App = () => {

  const { o_auth } = useContext(AuthContext)
  const [auth, setAuth] = o_auth

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      axios.post('/api/user/loggedin-user', { data: '' }, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .then(res => {
          if (res.data.data) {
            setAuth({ isAuth: true, user: res.data.data })
          }
        })
        .catch(err => console.log(err))
    }

  },[setAuth])


  return (<>
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
          <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  </>);
}


export default App;
