import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';

import Spinner from './components/spinner'

import {Layout} from './components/context/layout_context'

const LazyApp = lazy(() => import("./react_app"))

import "./src/styles/global.scss"

/*Echo.join('demo-channel')
    .here((users) => {
        console.log('here:', users)
    })
    .leaving((user) => {
        console.log('leaving:', user)
    })
    .joining((user) => {
        console.log('joining:', user)
    })
    .listen('PushTest', (e) => {
        console.log(e)
    });*/

if (document.getElementById('root')) {
    ReactDOM.render(
        <Suspense fallback={<Spinner />}>
            <Layout>
                <LazyApp />
            </Layout>
        </Suspense>,
    document.getElementById('root'));
}
