import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import Spinner from './components/spinner'
import Router from "./Router"

import "./src/styles/global.scss"

if (document.getElementById('root')) {
    ReactDOM.render(
        <Suspense fallback={<Spinner />}>
            <Router />
        </Suspense>,
    document.getElementById('root'));
}
