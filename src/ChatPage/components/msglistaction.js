import {connect} from 'react-redux'
import Msglist from './msglist.js'

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

const Msglistaction = connect(mapStateToProps,mapDispatchToProps)(Msglist)
export default Msglistaction