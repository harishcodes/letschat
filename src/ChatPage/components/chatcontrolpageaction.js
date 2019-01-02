import {connect} from 'react-redux'
import Chatcontrolpage from './chatcontrolpage.js'

const mapStateToProps = (state) => {
    
    return ({
        roomJoined:state.registerreducer.roomJoined,
        currentUserId:state.registerreducer.currentUserId,
        roomId:state.registerreducer.roomId
    })
}

const mapDispatchToProps = (dispatch) => {
    
    return ({
        
        /*sendToMsgList: (typedMsg) => {
            dispatch(sendToMsgList(typedMsg))
        }*/
    })
    
}

const Chatcontrolpageaction = connect(mapStateToProps,mapDispatchToProps)(Chatcontrolpage)
export default Chatcontrolpageaction