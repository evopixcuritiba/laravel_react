import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';

import Spinner from './components/spinner'

import Layout from './components/layout'

const LazyApp = lazy(() => import("./react_app"))

if (document.getElementById('root')) {
    ReactDOM.render(
        <Suspense fallback={<Spinner />}>
            <Layout>
                <LazyApp />
            </Layout>
        </Suspense>,
    document.getElementById('root'));
}
