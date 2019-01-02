import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducer from './masterreducer.js'

export default function storefn() {
    const middleware = applyMiddleware(thunk)
    
    let store=createStore(reducer,middleware)
    
    return store
}