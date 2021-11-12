import React from 'react'
import {
    Route, Switch, Redirect
} from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'
import Routes from './Routes'


const TopHeader = React.lazy(() => import('../shop/layout/TopHeader'))
const Menu = React.lazy(() => import('../shop/layout/Menu'))
const Footer = React.lazy(() => import('../shop/layout/Footer'))

const ShopIndex = React.lazy(() => import('../shop/ShopIndex'))
const Shop = React.lazy(() => import('../shop/Shop'))

function ShopRoute() {

    return (
        <div>
            <TopHeader />
            <Menu />
            <Switch>
                {Routes.map((route, index) => {
                    if (route.protected) {
                        return route.component && (
                            <ProtectedRoute
                                key={index}
                                path={route.path}
                                exact={true}
                                component={route.component}
                            />
                        )
                    }
                    return route.component && (
                        <Route
                            key={index}
                            path={route.path}
                            exact={true}
                            component={route.component}
                        />
                    )
                })}
                <Redirect from="/" to="shop" />
            </Switch>
            <Footer />
        </div>
    )
}

export default ShopRoute
