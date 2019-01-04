import React from 'react';
import Chatkit from '@pusher/chatkit-server';
import Userandroomaction from './RegisterPage/components/userandroomaction.js'

const instanceLocator = "v1:us1:3268bf70-60a8-43ea-8c05-b87e8b552de8"
const key = "43c0c797-ff07-40c1-b7d5-9cd90a75be95:mOu/lp2TlhnS2eu+Laaf1+pSwfYZXV2SGuopkUTGko4="


export default class Startup extends React.Component {
    
    
     constructor(){
        super()
        this.state = {
            chatKit :null
        }
    } 
    
    componentDidMount(){
        
        const chatkit = new Chatkit({
          instanceLocator: instanceLocator,
          key: key
        })
        
        //console.log('chat ', chatkit)
        this.setState({
            chatKit : chatkit
        })
            
    }
    
    
    render() {
        
        
        return (
        
            <Userandroomaction chatKit={this.state.chatKit} />
                
        )
        
    }
    
}