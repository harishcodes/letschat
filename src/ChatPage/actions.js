export function sendToMsgList(typedMsg,currentUser,roomId){
    return ((dispatch) => {
        currentUser.sendMessage({
            text:typedMsg,
            roomId: roomId
          })        
        dispatch({type:"SEND_TO_MSGLIST",payload:{typedMsg:typedMsg}})   
    })
}