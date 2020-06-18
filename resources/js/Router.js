import React, {Suspense, lazy} from 'react'
import {Router, Switch, Route} from 'react-router-dom'
import { history } from './src/services/history'

import Spinner from './components/spinner'

const Routeconfig = ({
    component: Component,
    ...rest
}) => (
    <Route
        {...rest}
        render={props => {
            return (
                <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                </Suspense>
            )
        }}
    />
)

const AppRoute = Routeconfig

export default function AppRouter(){
    return (
        <Router history={history}>
            <Switch>
                <AppRoute exact path="/" component={lazy(
                    () => import('./src/pages/home')
                )}
                />
                <AppRoute path="/page2" component={lazy(
                    () => import('./src/pages/page2')
                )}
                />
                <AppRoute path="/login" component={lazy(
                    () => import('./src/pages/login')
                )}
                />
                <AppRoute path="*" component={lazy(
                    () => import('./src/pages/404')
                )}
                />
            </Switch>
        </Router>
    )
}
