export function sendToMsgList(typedMsg,currentUser,roomId){
    return ((dispatch) => {
        currentUser.sendMessage({
            text:typedMsg,
            roomId: roomId
          })
        dispatch({type:"SEND_TO_MSGLIST",payload:{typedMsg:typedMsg}})
    })
}


export function leaveRoom(currentUser,roomId){
  return ((dispatch) => {

      currentUser.leaveRoom({ roomId: roomId })
        .then(room => {
          //console.log(`Left room with ID: ${room.id}`)
          dispatch({type:"LEFT_ROOM",payload:{}})
        })
        .catch(err => {
          //console.log(`Error leaving room ${roomId}: ${err}`)
        })
  })
}
