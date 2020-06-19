/*
import React from 'react'

import FullPageLayout from '../layout/full_layout'
import DefaultLayout from '../layout/default_layout'

const ContextLayout = React.createContext()

const layouts = {
    defaultLayout: DefaultLayout,
    fullLayout: FullPageLayout
}

class Layout extends React.Component {
    render() {
        const {children} = this.props
        return (
            <ContextLayout.Provider
                value={{
                    fullLayout: layouts['fullLayout'],
                    defaultLayout: layouts['defaultLayout'],
                }}
            >
                {children}
            </ContextLayout.Provider>
        )
    }
}

export {Layout, ContextLayout}
*/
/*import React, { createContext } from 'react'
export const LayoutContext = createContext()
export const LayoutContextProvider = LayoutContext.Provider*/
