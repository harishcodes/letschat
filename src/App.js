import React, { Component } from 'react';
//import logo from './logo.svg';
import './W3.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Chatcontrolpageaction from './ChatPage/components/chatcontrolpageaction.js'
import Startup from './Startup.js'
//const username = "harish"
//const roomId = "19379557"


class App extends Component {

    constructor(){
        super()
        this.state = {
            msgList : [],
            currentUser:'',
            activeRoomId:''
        }
    }



  render() {


    var renderComponent=""



    renderComponent =  <div>
                            <Startup />
                            <Chatcontrolpageaction/>
                        </div>

    return (
      <div className="App">
        <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>*/}
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>   
        </header>

        {renderComponent}
      </div>
    );
  }
}

export default App;
