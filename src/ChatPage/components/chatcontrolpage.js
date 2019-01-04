import React from 'react'
import Chatpageaction from './chatpageaction.js'
export default class chatpage extends React.Component {

    constructor(){
        super()
        this.state = {
            msgList : [],
            currentUser:'',
            activeRoomId:''
        }
    }

    render(){

        var renderComponent=""

        const {roomJoined} = this.props
        //console.log('Room Joined inside render :', currentUserId)

        if (roomJoined){

            renderComponent = <Chatpageaction/>
        }

        return (
            <div>
                {renderComponent}
            </div>
        )
    }

}
