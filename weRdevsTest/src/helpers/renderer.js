import React from 'react';
const renderingToString = require('react-dom/server').renderToString;
import {StaticRouter} from "react-router-dom";
import Routes from '../client/Routes';
import {Provider} from 'react-redux';
import {renderRoutes} from "react-router-config";
import serialize from 'serialize-javascript';
import {Helmet} from "react-helmet";

export default (req, store)=>{
    const content  = renderingToString(
        <Provider store = {store}>
        <StaticRouter location={req.path}>
           <div>
               {renderRoutes(Routes)}
           </div>
        </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();
    return `
<html>
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap" rel="stylesheet">
${helmet.title.toLocaleString()}
${helmet.meta.toString()}
</head>
<body>
<div id="root">${content}</div>
<script >
window.INITIAL_STATE = ${serialize(store.getState())}
</script>
<script src="bundle.js"></script>
</body>
</html>
`;
};