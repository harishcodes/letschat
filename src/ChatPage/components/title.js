import React from 'react'


export default class title extends React.Component {
    
    
    render(){
        
        return (
        
                <header className="top-bar">

                    <div className="left">
                      <span className="icon typicons-message"></span>
                      <h1>LETSCHAT</h1>
                    </div>

                    <div className="right">
                      <span className="icon typicons-minus"></span>
                      <span className="icon typicons-times"></span>
                    </div>

              </header>            
        
        )
    }
    
}