export function addUser(uniqueName,chatKit){

    return ((dispatch) => {
        chatKit.createUser({
          id: uniqueName,
          name: uniqueName,
        })
          .then((res) => {
            //console.log('User created successfully', res);
            return res
          })
          .then((result) => {
                //console.log('fetching Rooms', result.id);
                chatKit.getUserJoinableRooms({
                  userId: result.id
                })
                  .then((res) => {
                    //console.log('rooms list',res);
                    dispatch({type:"USER_CREATED",payload:{res:res,chatKitInstance:chatKit,userId:uniqueName}})
                  }).catch((err) => {
                    //console.log(err);
                  });
          })
          .catch((err) => {
                //console.log(err);
                //console.log(uniqueName);
                chatKit.getRooms({})
                  .then((res) => {
                    //console.log('rooms list',res);
                    dispatch({type:"USER_EXISTS",payload:{chatKitInstance:chatKit,res:res,userId:uniqueName}})
                  }).catch((err) => {
                    //console.log(err);
                 });
          })

    })
}

export function createNewRoom(roomName,userId,chatKit) {
  return ((dispatch) => {
            //console.log('USER ID :', userId)
            chatKit.createRoom({
              creatorId: userId,
              name: roomName
            })
              .then((res) => {
                //console.log('Room created successfully');
                dispatch({type:"ROOM_CREATED",payload:{roomId:res.id}})
                return res
              })
              .then((res) => {
                //console.log("Room iDDD ", res.id)
                chatKit.addUsersToRoom({
                  roomId: res.id,
                  userIds: [userId]
                })
                  .then((result) => {
                    //console.log('added');
                    dispatch({type:"JOINED_ROOM",payload:{roomId:res.id}})
                  })
                  .catch(err => console.error(err))

              })

              .catch((err) => {
                //console.log(err);
              })
  })
}


export function getRoom(userId,chatKit) {
  //console.log('USER ID',userId)
    return ((dispatch) => {
              chatKit.getRooms({
                // userId: userId
              })
              .then((res) => {
                //console.log('added');
                dispatch({type:"ROOMS_FETCHED",payload:{res:res,chatKitInstance:chatKit,userId:userId}})
              })
              .catch(err => console.error(err))

        }
    )
}



export function joinRoom(roomId,userId,chatKit) {
  //console.log('USER ID',userId)
    return ((dispatch) => {
            chatKit.addUsersToRoom({
              roomId: roomId,
              userIds: [userId]
            })
              .then(() => {
                //console.log('added');
                dispatch({type:"JOINED_ROOM",payload:{roomId:roomId}})
              })
              .catch(err => console.error(err))

        }
    )
}


export function newUser(){
  return ((dispatch) => {
    dispatch({type:"NEW_USER_CLICKED",payload:{}})
  })
}

export function existUser(){
  return ((dispatch) => {
    dispatch({type:"EXISTING_USER_CLICKED",payload:{}})
  })
}

export function returnHome() {
  return ((dispatch) => {
    dispatch({type:"RETURN_HOME",payload:{}})
  })
}
