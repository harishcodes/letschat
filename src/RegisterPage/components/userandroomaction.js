import {connect} from 'react-redux'
import Userandroom from './userandroom.js'
import {addUser,joinRoom,newUser,existUser,createNewRoom,getRoom} from '../actions.js'

const mapStateToProps = (state) => {

    return ({
        userExists:state.registerreducer.userExists,
        chatKitInstance:state.registerreducer.chatKitInstance,
        userAdded:state.registerreducer.userAdded,
        roomsList:state.registerreducer.roomsList,
        roomJoined:state.registerreducer.roomJoined,
        currentUserId:state.registerreducer.currentUserId,
        newExistingUser:state.registerreducer.newExistingUser,
        newUserClicked:state.registerreducer.newUserClicked,
        roomsFetched:state.registerreducer.roomsFetched
    })
}

const mapDispatchToProps = (dispatch) => {

    return ({

        addUser: (uniqueName,chatKit) => {
            dispatch(addUser(uniqueName,chatKit))
        },
        joinRoom: (roomId,userId,chatKit) => {
            dispatch(joinRoom(roomId,userId,chatKit))
        },
        newUser: () => {
            dispatch(newUser())
        },
        existUser: () => {
            dispatch(existUser())
        },
        createNewRoom: (roomName,userId,chatKit) => {
            dispatch(createNewRoom(roomName,userId,chatKit))
        },
        getRoom: (userId,chatKit) => {
           dispatch(getRoom(userId,chatKit))
        }
    })

}

const Userandroomaction = connect(mapStateToProps,mapDispatchToProps)(Userandroom)
export default Userandroomaction
