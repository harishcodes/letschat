import React from 'react'
import avatar from '../images/img_avatar2.png'
import Msglistaction from './msglistaction.js'
import {ListGroup,ListGroupItem } from 'reactstrap';


export default class userlist extends React.Component {

  constructor(){
      super()
      this.state = {
          msgList : [],
          subscribed:false
      }
  }


componentDidMount(){


  const {currentUser,roomId} = this.props
  this.setState({subscribed:true})
  currentUser.subscribeToRoom({
      roomId:roomId,
      hooks: {
          onMessage: message => {
              console.log("heremsg :", message)
              console.log("currUser",currentUser)
              this.setState({
                  msgList: [...this.state.msgList, message]
              })
          }
      }
  })


}





    render(){


    const {currentUser,roomId} = this.props

    var divStyle = {
        width:'50%',
        color:'white'
    }
    var imgStyle = {
        width:'45%'
    }


    var userComponent=""
    if ((typeof currentUser !== 'undefined') && (currentUser !== '') && this.state.subscribed){
        console.log('currentUser :', currentUser)
        console.log('urooms :', currentUser.rooms[0])
        var userArray = currentUser.rooms.filter(item => item.id === roomId)[0].users
        console.log('activeitemid :', roomId)
        console.log('UserArr :', userArray)

        if (typeof userArray !== 'undefined'){
            userComponent = userArray.map((user,idx) => {

                var coloroflist;
                var stateInfo
                console.log('STATEEEEE :', stateInfo)
                if (user.presence.state === 'online') {
                    coloroflist = "online_icon"
                    stateInfo = 'Online'
                } else {
                    coloroflist = "online_icon offline"
                    stateInfo = 'Offline'
                }

                return (
                        <li key={idx}>
                          <div className = { ["d-flex","bd-highlight"].join(' ') }>
                          								<div className="img_cont">
                          									<img src="https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" className={["rounded-circle", "user_img"].join(' ')}/>
                          									<span className={coloroflist}></span>
                          								</div>
                          								<div className="user_info">
                          									<span>{user.name}</span>
                          									<p>{user.name} is {stateInfo}</p>
                          								</div>
            							</div>
                        </li>
                )

            })
        }
    }

        return (

          <div className={["row", "justify-content-center", "h-100"].join(' ')}>
            <div className={["col-md-4","col-xl-3","chat"].join(' ')}>
              <div className={["card mb-sm-3", "mb-md-0", "contacts_card"].join(' ')}>
                <div className={["card-body","contacts_body"].join(' ')}>
                  <ul className="contacts">
                    {userComponent}
                  </ul>
                </div>
              </div>
            </div>
            <div className={["col-md-8", "col-xl-6", "chat"].join(' ')}>
                <Msglistaction msgList={this.state.msgList}  currentUser={currentUser} roomId={roomId}/>
            </div>
          </div>

        )

    }

}
