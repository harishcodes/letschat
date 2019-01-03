import React from 'react'
import Title from './title.js'
import Userlistaction from './userlistaction.js'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
const instanceLocator = "v1:us1:3268bf70-60a8-43ea-8c05-b87e8b552de8"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3268bf70-60a8-43ea-8c05-b87e8b552de8/token"


export default class chatpage extends React.Component {

    constructor(){
        super()
        this.state = {
            //msgList : [],
            currentUser:'',
            activeRoomId:''
        }
    }




    componentDidMount(){
        const {roomJoined,currentUserId,roomId} = this.props
        console.log('Room Joined :', roomJoined)
        console.log('CurrentUserId :', currentUserId)
        console.log('roomId :', roomId)

          if (roomJoined) {
                const chatManager = new ChatManager({
                    instanceLocator:instanceLocator,
                    userId:currentUserId,
                    tokenProvider: new TokenProvider({
                        url:testToken
                    })
                })


                chatManager.connect()
                    .then(currentUser => {
                       //this.currentUser = currentUser
                       this.setState({currentUser: currentUser})
                    })
                    .catch(err => {
                        console.log('Error on connection', err)
                    })
            }
  }

    render(){

        var renderComponent=""

        const {roomJoined,roomId} = this.props


         if (roomJoined){
            console.log('CURRR USER :', this.state.currentUser)
            if ((typeof this.state.currentUser !== 'undefined') && (this.state.currentUser !== '')){
               renderComponent = <div className={["container-fluid", "h-100"].join(' ')}>
                                            <Userlistaction currentUser={this.state.currentUser} roomId={roomId}/>
                                  </div>
            }
         }
        return (
            <div>
                {renderComponent}
            </div>
        )
    }

}
