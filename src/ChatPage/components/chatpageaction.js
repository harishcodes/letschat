import {connect} from 'react-redux'
import Chatpage from './chatpage.js'

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

const Chatpageaction = connect(mapStateToProps,mapDispatchToProps)(Chatpage)
export default Chatpageaction