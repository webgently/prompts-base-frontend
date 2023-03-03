import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Layout = (props: any) => {
    return (
        <div className="layout">
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}

export default Layout
