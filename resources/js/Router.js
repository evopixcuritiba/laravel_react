import React, {Suspense, lazy} from 'react'
import {Router, Switch, Route} from 'react-router-dom'
import { history } from './src/services/history'
import {ContextLayout} from './components/context/layout_context'

import Spinner from './components/spinner'

const Routeconfig = ({
    component: Component,
    isPrivate,
    fullLayout,
    ...rest
}) => (
    <Route
        {...rest}
        render={props => {
            return (
                <ContextLayout.Consumer>
                    {context => {
                        let SwitchLayout =
                            fullLayout === true
                            ? context.fullLayout : context.defaultLayout
                        return(
                            <SwitchLayout {...props}>
                                <Suspense fallback={<Spinner />}>
                                    <Component {...props} />
                                </Suspense>
                            </SwitchLayout>
                        )
                    }}
                </ContextLayout.Consumer>
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
