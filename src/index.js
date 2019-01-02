import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {HashRouter, Route} from 'react-router-dom'
import storefn from './store'
import * as serviceWorker from './serviceWorker';

const store = storefn()

const routes= <Route>
                <Route path="/" component={App}/>
              </Route>

//ReactDOM.render(<App />, document.getElementById('root'));
                
ReactDOM.render(<Provider store={store}>
                    <HashRouter>
                        {routes}
                    </HashRouter>
                </Provider>, document.getElementById('root'));                


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
