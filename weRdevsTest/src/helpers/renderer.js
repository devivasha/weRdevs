import React from 'react';
const renderingToString = require('react-dom/server').renderToString;
import {StaticRouter} from "react-router-dom";
import Routes from '../client/Routes';
import {Provider} from 'react-redux';
import {renderRoutes} from "react-router-config";
import serialize from 'serialize-javascript';
import {Helmet} from "react-helmet";

export default (req, store, context)=>{
    const content  = renderingToString(
        <Provider store = {store}>
        <StaticRouter location={req.path} context ={context}>
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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
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