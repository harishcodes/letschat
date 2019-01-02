import {connect} from 'react-redux'
import Userandroom from './userandroom.js'
import {addUser,joinRoom} from '../actions.js'

const mapStateToProps = (state) => {
    
    return ({
        userExists:state.registerreducer.userExists,
        chatKitInstance:state.registerreducer.chatKitInstance,
        userAdded:state.registerreducer.userAdded,
        roomsList:state.registerreducer.roomsList,
        roomJoined:state.registerreducer.roomJoined
    })
}

const mapDispatchToProps = (dispatch) => {
    
    return ({
        
        addUser: (uniqueName,chatKit) => {
            dispatch(addUser(uniqueName,chatKit))
        },
        joinRoom: (roomId) => {
            dispatch(joinRoom(roomId))
        }
    })
    
}

const Userandroomaction = connect(mapStateToProps,mapDispatchToProps)(Userandroom)
export default Userandroomaction