const INITIAL_STATE = {
    userExists:false,
    userAdded:false,
    roomJoined:false,
    chatKitInstance:"",
    roomsList:"",
    roomId:"",
    currentUserId:""
}

export default function registerreducer(state={INITIAL_STATE},action){

    switch (action.type) {
        case "USER_CREATED": {
            return {...state,
                    userExists:false,
                    chatKitInstance:action.payload.chatKitInstance,
                    userAdded:true,
                    roomsList:action.payload.res,
                    currentUserId:action.payload.userId
                   }
        }
        
        case "USER_EXISTS": {
            return {...state,
                    chatKitInstance:action.payload.chatKitInstance,
                    userExists:true,
                    userAdded:false,
                    roomsList:action.payload.res,
                    currentUserId:action.payload.userId                    
                   }
        }
        
        case "JOINED_ROOM": {
            return {...state,
                    userExists:false,
                    userAdded:true,
                    roomJoined:true,
                    roomId:action.payload.roomId
                   }
        }        
            
        default: {
            return {...state}
        }
    }
    
}