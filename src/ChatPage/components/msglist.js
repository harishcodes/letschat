import React from 'react'



export default class msglist extends React.Component {

    
    
    
    render(){
        
        var liComponent
        var liSelfOther
        const {msgList,currentUser} = this.props
        
        liComponent = msgList.map((msg,i) => {
                   if (msg.senderId === currentUser.name ){
                       liSelfOther = "self"
                   } else {
                       liSelfOther = "other"
                   }
                   return (
                     <li className={liSelfOther} key={i}>
                       <div className="avatar">
                            <img alt="" src={msg.sender.avatarURL} />
                      </div>                           
                       <div className="messages">
                            <p>
                                {msg.text}
                            </p>
                            <time dateTime="2009-11-13T20:00">{msg.senderId} • 50min</time>
                       </div>
                     </li>                       
                   )
               })
        
        
        
        return (
        
            <div>
                <ol className="discussion">
                    {liComponent}
                </ol>
            </div>        
        )        
    }
    
}