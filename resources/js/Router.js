import React, {lazy} from 'react'
import {Router, Switch, Route, Redirect} from 'react-router-dom'
import { history } from './src/services/history'

import FullPageLayout from './components/layout/full_layout'
import DefaultLayout from './components/layout/default_layout'

const AppRoute = ({
    component: Component,
    isPrivate,
    fullLayout,
    ...rest
}) => (
    <Route
        {...rest}
        render={props => {

            if(!isSigned && isPrivate){
                return (<Redirect to={'login'} />)
            }
            if (isSigned && !isPrivate) {
                return <Redirect to={'/'} />
            }

            let SwitchLayout = fullLayout === true ? FullPageLayout : DefaultLayout
            return (
                <SwitchLayout {...props}>
                    <Component {...props} />
                </SwitchLayout>
            )
        }}
    />
)

export default function AppRouter(){
    return (
        <Router history={history}>
            <Switch>
                <AppRoute isPrivate exact path="/" component={lazy(
                    () => import('./src/pages/home')
                )}
                />
                <AppRoute isPrivate path="/page2" component={lazy(
                    () => import('./src/pages/page2')
                )}
                />
                <AppRoute fullLayout path="/login" component={lazy(
                    () => import('./src/pages/login')
                )}
                />
                <AppRoute fullLayout path="/forgot" component={lazy(
                    () => import('./src/pages/forgot')
                )}
                />
                <AppRoute isPrivate fullLayout path="*" component={lazy(
                    () => import('./src/pages/404')
                )}
                />
            </Switch>
        </Router>
    )
}
