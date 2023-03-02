import React from 'react'

const Layout = (props: any) => {
    return (
        <div className="layout">
            <main>{props.children}</main>
        </div>
    )
}

export default Layout
