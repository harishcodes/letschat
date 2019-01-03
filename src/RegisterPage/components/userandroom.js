import React from 'react'
import { Button, Form, FormGroup, Label, Input,ListGroup,ListGroupItem } from 'reactstrap';

export default class userandroom extends React.Component {

    constructor(){
        super()
        this.state = {
            uniqueName : ""
        }
    }

    handleChange = (e) => {

        this.setState({
            uniqueName: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('hey')
        const {addUser} = this.props
        console.log('chhh', this.props.chatKit)
        addUser(this.state.uniqueName,this.props.chatKit)
        this.setState({
            uniqueName:""
        })
    }

    joinRoom = (a) => {
        const {joinRoom,roomsList,currentUserId} = this.props
        console.log('innerHtml :', a.target.innerText.trim())
        var roomnametrim = a.target.innerText.trim()
        var roomiden = roomsList.filter(item => item.name === roomnametrim).map(item => item.id)
        console.log('roomiden', roomiden.toString())
        console.log('in JOIN ROOM', this.props.chatKit)
        joinRoom(roomiden.toString(),currentUserId,this.props.chatKit)
    }



    render(){

        var divStyle = {
            width:'50%',
            color:'white'
        }

        var renderComponent=""
        var roomList=""
        var licpmnt=""
        const {roomJoined,userAdded,userExists} = this.props

        if (!roomJoined){

            if (!(userAdded) && !(userExists)){
                renderComponent = <div>
                                  <Form inline onSubmit={this.handleSubmit.bind(this)}>
                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                          <Label for="user" className="mr-sm-2">Enter - New User/Existing User</Label>
                                          <Input type="text" name="user" id="user" placeholder="Unique Name"  value={this.state.uniqueName} onChange={this.handleChange.bind(this)} />
                                        </FormGroup>
                                        <Button onClick={this.handleSubmit.bind(this)}>Add User</Button>
                                  </Form>


                                  </div>

            }
            const {roomsList} = this.props

            console.log('UserAdded ', userAdded)
            if (userAdded || userExists){
                licpmnt = roomsList.map((room,i) => {
                                  return(
                                    <ListGroupItem tag="a" href="#" action key={i} color="secondary" onClick={this.joinRoom.bind(this)}>
                                            {room.name}
                                    </ListGroupItem>
                                    )
                              })
                roomList = <div className="w3-container" style={divStyle}>
                              <h2>Pick a Room</h2>
                              <ListGroup>
                                 {licpmnt}
                              </ListGroup>
                            </div>

            }
    }

        return (

            <div>
                {renderComponent}
                {roomList}
            </div>
        )
    }

}
