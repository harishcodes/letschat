import React from 'react'


export default class chatinput extends React.Component {

    constructor(){
        super()
        this.state = {
            typedMsg : ""
        }
    }

    handleChange = (e) => {

        this.setState({
            typedMsg: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {sendToMsgList} = this.props
        sendToMsgList(this.state.typedMsg,this.props.currentUser,this.props.roomId)
        this.setState({
            typedMsg:""
        })
    }

    render() {


        return(

            <div className="card-footer">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="input-group">
  								        <input name="" className={["form-control", "type_msg"].join(' ')} placeholder="Type your message..." value={this.state.typedMsg} onChange={this.handleChange.bind(this)}>
                          </input>
  							   </div>
                </form>
            </div>

        )
    }
}
