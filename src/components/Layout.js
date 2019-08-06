import React from 'react'

import Footer from './Footer'
import Header from './Header';

const Layout = ({ children, title }) => (
    <>
        <Header title={title} />
        {children}
        <Footer />
    </>
)

export default Layout