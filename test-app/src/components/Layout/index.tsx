import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
// import './Layout.scss';


const Layout = () => {

    

    return (
        <>
        <Header/>
            <Outlet />
        <Footer />    
        </>
    )
}

export default Layout;