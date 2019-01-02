import React from 'react'
import avatar from '../images/img_avatar2.png'
import {ListGroup,ListGroupItem } from 'reactstrap';


export default class userlist extends React.Component {

    render(){ 
    
    
    const {currentUser,activeRoomId} = this.props
          
    var divStyle = {
        width:'50%',
        color:'white'
    }  
    var imgStyle = {
        width:'45%'
    }
    var userComponent=""
    var userArray = currentUser.rooms.filter(item => item.id === activeRoomId).users
    console.log('userarr :', userArray)
    
    
    userComponent = userArray.map((user) => {
        
        var coloroflist;
        
        if (user.presence.state === 'online') {
            coloroflist = "success"
        } else {
            coloroflist = "secondary"
        }
        
        return (
                <ListGroupItem color={coloroflist}>
                    {user.name}
                </ListGroupItem>                            
        )
        
    })
        
        return (
        

            <div className="w3-container" style={divStyle}>
              <h2>Avatar List</h2>
              <ListGroup>
                {userComponent}
              </ListGroup>
            </div>        
        
        )
    
    }
    
}








