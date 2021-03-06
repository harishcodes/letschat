import React from 'react'
import Chatinputaction from './chatinputaction.js'
import avatar from '../images/img_avatar2.png'


export default class msglist extends React.Component {




    render(){

        var liComponent
        var liSelfOther
        const {currentUser,roomId,msgList} = this.props

        liComponent = msgList.map((msg,i) => {
                   if (msg.senderId === currentUser.name ){
                       liSelfOther = <div className={["d-flex", "justify-content-end", "mb-4"].join(' ')} key={i}>
                                         <div className="msg_cotainer_send">
                                              <span className="msg_sender">{msg.sender.name}</span>
                                               {msg.text}
                                               <span className="msg_time_send">8:40 AM, Today</span>
                                         </div>
                                         <div className="img_cont_msg">
                                             <img alt="" src={avatar} className={["rounded-circle", "user_img_msg"].join(' ')}/>
                                         </div>
                                     </div>
                   } else {
                       liSelfOther = <div className={["d-flex", "justify-content-start", "mb-4"].join(' ')} key={i}>
                                         <div className="img_cont_msg">
                                             <img alt="" src={avatar} className={["rounded-circle", "user_img_msg"].join(' ')}/>
                                         </div>
                                         <div className="msg_cotainer">
                                               <span className="msg_sender">{msg.sender.name}</span>
                                               {msg.text}
                                               <span className="msg_time">8:40 AM, Today</span>
                                         </div>
                                     </div>
                   }
                   return (
                     liSelfOther
                   )
               })



        return (
                    <div className="card">
                        <div className={["card-header", "msg_head"].join(' ')}>
                            <div className={["d-flex", "bd-highlight"].join(' ')}>
                                <div className="user_info">
                                    <span>Letschat</span>
                                </div>
                            </div>
                        </div>
                        <div className={["card-body", "msg_card_body"].join(' ')}>
                            {liComponent}
                        </div>
                        <Chatinputaction currentUser={currentUser} roomId={roomId}/>
                    </div>
        )
    }

}
