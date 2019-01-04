import React from 'react'
import { Button, Form, FormGroup, Input,FormFeedback,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class userandroom extends React.Component {

    constructor(){
        super()
        this.state = {
            uniqueName : "",
            buttonDisabled : true,
            modal: false,
            roomName:'',
            validate: {
              nameState:'has-danger'
            }

        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }


    handleChange = (e) => {
      const { validate } = this.state
      const spaceRegex = /^\S*$/
      var temp
       if (spaceRegex.test(e.target.value)){
         ////console.log('valid')
          validate.nameState = 'has-success'
          temp =false
       } else {
         ////console.log('invvalid')
         validate.nameState = 'has-danger'
         temp =true
       }


        this.setState({
            uniqueName: e.target.value,
            validate:validate,
            buttonDisabled: temp
        })
    }

    handleRoomChange = (e) => {
      const { validate } = this.state
      const spaceRegex = /^\S*$/
      var temp
       if (spaceRegex.test(e.target.value)){
         //console.log('valid')
          validate.nameState = 'has-success'
          temp =false
       } else {
         //console.log('invvalid')
         validate.nameState = 'has-danger'
         temp =true
       }


        this.setState({
            roomName: e.target.value,
            validate:validate,
            buttonDisabled: temp
        })
    }



    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.validate.nameState === 'has-success') {
          //console.log('hey')
          const {addUser} = this.props
          //console.log('chhh', this.props.chatKit)
          addUser(this.state.uniqueName,this.props.chatKit)
          this.setState({
              uniqueName:""
          })
        }
    }


    createNewRoom = (e) => {
        e.preventDefault()
        if (this.state.validate.nameState === 'has-success') {
          //console.log('hey')
          const {createNewRoom} = this.props
          //console.log('chhh', this.props.chatKit)
          createNewRoom(this.state.roomName,this.props.currentUserId,this.props.chatKit)
          this.toggle()
          this.setState({
              roomName:""
          })
        }
    }



    getRoom = (e) => {
        e.preventDefault()

        //console.log('hey')
        const {getRoom} = this.props
        //console.log('chhh', this.props.chatKit)
        getRoom(this.props.currentUserId,this.props.chatKit)
    }


    handleNewuser = (e) => {
        //console.log('hey')
        const {newUser} = this.props
        this.setState( {
            uniqueName : "",
            buttonDisabled : true,
            validate: {
              nameState:'has-danger'
            }

        })
        newUser()
    }

    handleExistinguser = (e) => {
        //console.log('hey')
        const {existUser} = this.props
        this.setState( {
            uniqueName : "",
            buttonDisabled : true,
            validate: {
              nameState:'has-danger'
            }

        })
        existUser()
    }

    joinRoom = (a) => {
        const {joinRoom,roomsList,currentUserId} = this.props
        //console.log('innerHtml :', a.target.innerText.trim())
        var roomnametrim = a.target.innerText.trim()
        var roomiden = roomsList.filter(item => item.name === roomnametrim).map(item => item.id)
        //console.log('roomiden', roomiden.toString())
        //console.log('in JOIN ROOM', this.props.chatKit)
        joinRoom(roomiden.toString(),currentUserId,this.props.chatKit)
    }



    render(){

        var divStyle = {
            color:'white'
        }

        var ulStyle = {
          display:'inline-block',
          border: '2px solid white'
        }

        var formFdbkStyle = {
          display:'none'
        }


        var renderComponent=""
        var roomList=""
        var listOfRooms=""
        var licpmnt=""
        var validVal
        var inValidVal
        var buttonLabel
        const {roomJoined,userAdded,userExists,newExistingUser,newUserClicked,roomsFetched} = this.props

        if (newUserClicked){
          buttonLabel = "Add User And List All Rooms"
        } else {
          buttonLabel = "List Member Rooms"
        }

        if (!roomJoined){

          if (this.state.validate.nameState === 'has-success') {
            validVal =true
          }

          if (this.state.validate.nameState === 'has-danger') {
            inValidVal = true
          }


            //if (!(userAdded) && !(userExists)){
                if (!(newExistingUser) || (userAdded) || (userExists)){
                  renderComponent = <div>
                                    <Form inline>
                                        <Button color="success" size="lg" onClick={this.handleNewuser.bind(this)}>New User</Button>&nbsp;&nbsp;&nbsp;
                                        <Button color="success" size="lg" onClick={this.handleExistinguser.bind(this)}>Existing User</Button>
                                    </Form>
                                    <br/>
                                    <br/>
                                    </div>
                } else {
                  renderComponent = <div>
                                    <Form inline>
                                        <Button color="success" size="lg" onClick={this.handleNewuser.bind(this)}>New User</Button>&nbsp;&nbsp;&nbsp;
                                        <Button color="success" size="lg" onClick={this.handleExistinguser.bind(this)}>Existing User</Button>
                                    </Form>
                                    <Form inline onSubmit={this.handleSubmit.bind(this)}>
                                          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                            <Input type="text" required={true} name="user" id="user"
                                            valid={validVal}
                                            invalid={inValidVal}
                                            placeholder="Unique Name"  value={this.state.uniqueName} onChange={this.handleChange.bind(this)} />
                                            <FormFeedback valid style={formFdbkStyle}></FormFeedback>
                                            <FormFeedback style={formFdbkStyle}></FormFeedback>
                                          </FormGroup>
                                          <Button color="warning" onClick={this.handleSubmit.bind(this)} disabled ={this.state.buttonDisabled}>{buttonLabel}</Button>
                                    </Form>
                                    <br/>
                                    <br/>
                                    </div>
                }
            //}


            const {roomsList} = this.props

            //console.log('UserAdded ', userAdded)
            if (userAdded || userExists){
                if (roomsFetched){
                  licpmnt = roomsList.map((room,i) => {
                                    return(
                                      <li key={i}>
                                        <a href="#" onClick={this.joinRoom.bind(this)}>
                                              {room.name}
                                        </a>
                                      </li>
                                      )
                                })
                  listOfRooms = <div>
                                  <h2>Pick Room</h2>
                                  <br/>
                                  <ul style={ulStyle}>
                                    {licpmnt}
                                  </ul>
                                </div>

                }

                roomList = <div style={divStyle}>
                              <Form inline>
                                  <Button color="success" size="lg" onClick={this.toggle}>Create New Room</Button>&nbsp;&nbsp;&nbsp;
                                  <Button color="success" size="lg" onClick={this.getRoom.bind(this)}>List All Rooms</Button>
                              </Form>

                              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>ADD NEW ROOM</ModalHeader>
                                <ModalBody>
                                    <Form inline onSubmit={this.createNewRoom.bind(this)}>
                                          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                            <Input type="text" required={true} name="room" id="room"
                                            valid={validVal}
                                            invalid={inValidVal}
                                            placeholder="Unique Room Name"  value={this.state.roomName} onChange={this.handleRoomChange.bind(this)} />
                                            <FormFeedback valid style={formFdbkStyle}></FormFeedback>
                                            <FormFeedback style={formFdbkStyle}></FormFeedback>
                                          </FormGroup>
                                          <Button color="warning" onClick={this.createNewRoom.bind(this)} disabled ={this.state.buttonDisabled}>Add Room</Button>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                  <Button color="warning" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                              </Modal>

                              <br/>
                              {listOfRooms}
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
