import 'babel-polyfill';
import express from 'express';
import renderer from  './helpers/renderer';
import createStore from './helpers/createStore';
import {matchRoutes} from "react-router-config";
import Routes from './client/Routes';

const app = express();
const PORT = 3000;
app.use(express.static('public'));
app.get('*', (req, res)=>{
    const store = createStore(req);
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
   }).map(promise=>{
       if(promise){
           return new Promise((resolve, reject)=>{
               promise.then(resolve).catch(resolve);
           });
       }
  });
   Promise.all(promises).then(()=>{
       const content = renderer(req, store);
       res.send(content);
   });
});
app.listen(PORT, ()=> {
   console.log('Listening on port 3000')
});
