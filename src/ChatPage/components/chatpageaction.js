import {connect} from 'react-redux'
import Chatpage from './chatpage.js'
import {returnHome} from '../../RegisterPage/actions.js'

const mapStateToProps = (state) => {

    return ({
        roomJoined:state.registerreducer.roomJoined,
        currentUserId:state.registerreducer.currentUserId,
        roomId:state.registerreducer.roomId
    })
}

const mapDispatchToProps = (dispatch) => {

    return ({

        returnHome: (currentUser,roomId) => {
            dispatch(returnHome(currentUser,roomId))
        }
    })

}

const Chatpageaction = connect(mapStateToProps,mapDispatchToProps)(Chatpage)
export default Chatpageaction
