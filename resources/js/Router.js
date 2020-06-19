import React, {Suspense, lazy} from 'react'
import {Router, Switch, Route} from 'react-router-dom'
import { history } from './src/services/history'

import FullPageLayout from './components/layout/full_layout'
import DefaultLayout from './components/layout/default_layout'

import Spinner from './components/spinner'

const AppRoute = ({
    component: Component,
    isPrivate,
    fullLayout,
    ...rest
}) => (
    <Route
        {...rest}
        render={props => {
            let SwitchLayout =
                fullLayout === true
                    ? FullPageLayout : DefaultLayout
            return (
                <SwitchLayout {...props}>
                    <Suspense fallback={<Spinner />}>
                        <Component {...props} />
                    </Suspense>
                </SwitchLayout>
            )
        }}
    />
)

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
                <AppRoute fullLayout path="/login" component={lazy(
                    () => import('./src/pages/login')
                )}
                />
                <AppRoute fullLayout path="/forgot" component={lazy(
                    () => import('./src/pages/forgot')
                )}
                />
                <AppRoute fullLayout path="*" component={lazy(
                    () => import('./src/pages/404')
                )}
                />
            </Switch>
        </Router>
    )
}
