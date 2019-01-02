export function addUser(uniqueName,chatKit){

    return ((dispatch) => {
        chatKit.createUser({
          id: uniqueName,
          name: uniqueName,
        })
          .then((res) => {
            console.log('User created successfully', res);
            return res
          })
          .then((result) => {
                console.log('fetching Rooms', result.id);
                chatKit.getUserJoinableRooms({
                  userId: result.id
                })
                  .then((res) => {
                    console.log('rooms list',res);
                    dispatch({type:"USER_CREATED",payload:{res:res,chatKitInstance:chatKit,userId:uniqueName}})                     
                  }).catch((err) => {
                    console.log(err);
                  });            
          })        
          .catch((err) => {
                console.log(err);
                console.log(uniqueName);
                chatKit.getRooms({})
                  .then((res) => {
                    console.log('rooms list',res);
                    dispatch({type:"USER_EXISTS",payload:{chatKitInstance:chatKit,res:res,userId:uniqueName}}) 
                  }).catch((err) => {
                    console.log(err);
                 });                               
          })                
        
    })
}

export function joinRoom(roomId) {
    return ((dispatch) => {
            dispatch({type:"JOINED_ROOM",payload:{roomId:roomId}})
        }        
    )
}