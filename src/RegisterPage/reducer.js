const INITIAL_STATE = {
    userExists:false,
    userAdded:false,
    roomJoined:false,
    chatKitInstance:"",
    roomsList:"",
    roomId:"",
    currentUserId:"",
    newExistingUser:false,
    newUserClicked:false,
    roomCreated:false,
    roomsFetched:false
}

export default function registerreducer(state={INITIAL_STATE},action){

    switch (action.type) {
        case "USER_CREATED": {
            return {...state,
                    userExists:false,
                    chatKitInstance:action.payload.chatKitInstance,
                    userAdded:true,
                    roomsList:action.payload.res,
                    currentUserId:action.payload.userId,
                    newExistingUser:true,
                    newUserClicked:true
                   }
        }

        case "ROOMS_FETCHED": {
            return {...state,
                    chatKitInstance:action.payload.chatKitInstance,
                    roomsList:action.payload.res,
                    currentUserId:action.payload.userId,
                    roomsFetched:true
                   }
        }

        case "USER_ROOMS_AFTER_CREATION": {
            return {...state,
                    userExists:false,
                    chatKitInstance:action.payload.chatKitInstance,
                    userAdded:true,
                    roomsList:action.payload.res,
                    currentUserId:action.payload.userId,
                    newExistingUser:true,
                    newUserClicked:true,
                    roomCreated:true
                   }
        }

        case "USER_EXISTS": {
            return {...state,
                    chatKitInstance:action.payload.chatKitInstance,
                    userExists:true,
                    userAdded:false,
                    roomsList:action.payload.res,
                    currentUserId:action.payload.userId,
                    newExistingUser:true,
                    newUserClicked:false
                   }
        }

        case "JOINED_ROOM": {
            return {...state,
                    userExists:false,
                    userAdded:true,
                    roomJoined:true,
                    roomId:action.payload.roomId,
                    newExistingUser:false,
                    newUserClicked:false
                   }
        }

        case "ROOM_CREATED": {
            return {...state,
                    roomCreated:true,
                    roomId:action.payload.roomId
                   }
        }

        case "NEW_USER_CLICKED": {
          return {...state,
                  newExistingUser:true,
                  newUserClicked:true,
                  userExists:false,
                  userAdded:false,
          }
        }

        case "EXISTING_USER_CLICKED": {
          return {...state,
                  newExistingUser:true,
                  newUserClicked:false,
                  userExists:false,
                  userAdded:false,
          }
        }
        case "RETURN_HOME": {
            return {...state,
                  userExists:false,
                  userAdded:false,
                  roomJoined:false,
                  chatKitInstance:"",
                  roomsList:"",
                  roomId:"",
                  currentUserId:"",
                  newExistingUser:false,
                  newUserClicked:false,
                  roomCreated:false,
                  roomsFetched:false
                   }
        }

        default: {
            return {...state}
        }
    }

}
