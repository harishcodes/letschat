import {combineReducers} from 'redux'
import chatreducer from './ChatPage/reducer.js'
import registerreducer from './RegisterPage/reducer.js'

export default combineReducers({
    chatreducer,
    registerreducer
})