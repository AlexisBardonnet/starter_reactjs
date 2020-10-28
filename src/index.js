import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
/* Pages */
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage  from './pages/MainPage/MainPage';
/* Plugins */
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux'

const App = () => (
   <Provider store={store}>
      <Router>
         <Route exact path="/" component={LoginPage} />
         <Route path="/main" component={MainPage} />
      </Router>
   </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();