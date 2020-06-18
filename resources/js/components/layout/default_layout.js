import React from 'react'

export default function DefaultLayout({ children }){
    return (<>
        <div>head</div>
        <div>menu</div>
        <div>{children}</div>
        <div>footer</div>
    </>)
}
