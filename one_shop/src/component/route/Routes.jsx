import React from "react"

const ShopIndex = React.lazy(() => import('../shop/ShopIndex')) 
const Shop = React.lazy(() => import('../shop/Shop')) 
const ProductDetails = React.lazy(() => import('../shop/ProductDetails')) 
const Contact = React.lazy(() => import('../Contact')) 
const Cart = React.lazy(() => import('../shop/Cart')) 
const Checkout = React.lazy(() => import('../shop/Checkout')) 
const Confirmation = React.lazy(() => import('../shop/Confirmation')) 

const Routes = [
    { path: '/',                     component: ShopIndex,         protected: false },
    { path: '/shop',                 component: Shop,              protected: false },
    { path: '/product-details',      component: ProductDetails,    protected: false },
    { path: '/contact',              component: Contact,           protected: false },
    { path: '/cart',                 component: Cart,              protected: false },
    { path: '/checkout',             component: Checkout,          protected: true },
    { path: '/confirmation',         component: Confirmation,      protected: true }
]

export default Routes
