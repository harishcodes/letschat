import React from 'react'
import Chatinputaction from './chatinputaction.js'
import Msglistaction from './msglistaction.js'
import Title from './title.js'
import Userlistaction from './userlistaction.js'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
const instanceLocator = "v1:us1:3268bf70-60a8-43ea-8c05-b87e8b552de8"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3268bf70-60a8-43ea-8c05-b87e8b552de8/token"


export default class chatpage extends React.Component {
    
    constructor(){
        super()
        this.state = {
            msgList : [],
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
                        currentUser.subscribeToRoom({
                            roomId:roomId,
                            hooks: {
                                onMessage: message => {
                                    console.log("heremsg :", message)
                                    console.log("currUser",currentUser)
                                    this.setState({
                                        msgList: [...this.state.msgList, message],
                                        currentUser: currentUser,
                                        activeRoomId: roomId
                                    })
                                }
                            }
                        })
                    })
                    .catch(err => {
                        console.log('Error on connection', err)
                    })        
            }
  }    
    
    render(){
        
        var renderComponent=""
        
        const {roomJoined} = this.props    

            
         if (roomJoined){     
            console.log('CURRR USER :', this.state.currentUser)  
             renderComponent = <section className="indent-1">
                                    <section className="module">
                                        <Userlistaction currentUser={this.state.currentUser} roomId={this.state.activeRoomId}/>
                                    </section>                  
                                    <section className="module">
                                        <Title/>
                                        <Msglistaction msgList={this.state.msgList} currentUser={this.state.currentUser}/>
                                        <Chatinputaction currentUser={this.state.currentUser} roomId={this.state.activeRoomId}/>    
                                    </section>                                                       
                                </section> 

         }
        return (
            <div>                                       
                {renderComponent}
            </div>
        )
    }
    
}