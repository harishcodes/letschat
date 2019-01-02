import {connect} from 'react-redux'
import Userlist from './userlist.js'

const mapStateToProps = (state) => {
    
    return ({
        typedSomething:state.chatreducer.typedSomething,
        typedMsg:state.chatreducer.typedMsg
    })
}

const mapDispatchToProps = (dispatch) => {
    
    return ({
        
        /*sendToMsgList: (typedMsg) => {
            dispatch(sendToMsgList(typedMsg))
        }*/
    })
    
}

const Userlistaction = connect(mapStateToProps,mapDispatchToProps)(Userlist)
export default Userlistaction