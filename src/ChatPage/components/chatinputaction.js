import {connect} from 'react-redux'
import Chatinput from './chatinput.js'
import {sendToMsgList} from '../actions.js'

const mapStateToProps = (state) => {
    
    return ({
        typedSomething:state.chatreducer.typedSomething
    })
}

const mapDispatchToProps = (dispatch) => {
    
    return ({
        
        sendToMsgList: (typedMsg,currentUser,roomId) => {
            dispatch(sendToMsgList(typedMsg,currentUser,roomId))
        }
    })
    
}

const Chatinputaction = connect(mapStateToProps,mapDispatchToProps)(Chatinput)
export default Chatinputaction