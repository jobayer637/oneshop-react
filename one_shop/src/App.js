import React, { useEffect, useContext, lazy, Suspense } from 'react';
import { rootContext } from './api/context/ContextProvider';
import { HashRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Loading...</div>
  </div>
)

const ShopRoute = lazy(() => import('./component/route/ShopRoute'))

// import Login from './component/auth/Login'
const Login = lazy(() => import('./component/auth/Login'))
const Register = lazy(() => import('./component/auth/Register'))
const ForgotPassword = lazy(() => import('./component/auth/ForgotPassword'))

const App = () => {
  const { api_categories, api_products } = useContext(rootContext)
  const [categories, setCategories] = api_categories
  const [products, setProducts] = api_products

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        const categories = category(res.data)
        setCategories(categories)
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }, [setCategories, setProducts])

  const category = (products = []) => {
    let categories = []
    products.map(product => categories.push(product.category))
    let unique = [...new Set(categories)];

    return unique
  }


  return (
    <div>

      <HashRouter>
        <Suspense fallback={loading}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-passward" component={ForgotPassword} />
            <Route path="/" render={props => <ShopRoute {...props} />} />
          </Switch>
        </Suspense>
      </HashRouter>

    </div>
  );
}

export default App;
