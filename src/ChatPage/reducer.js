const INITIAL_STATE = {
    typedSomething:false,
    typedMsg:""
}

export default function chatreducer(state={INITIAL_STATE},action){

    switch (action.type) {
        case "SEND_TO_MSGLIST": {
            return {...state,typedSomething:true,typedMsg:action.payload.typedMsg}
        }

        case "LEFT_ROOM": {
            return {...state,roomJoined:false,newExistingUser:false,userAdded:false,userExists:false}
        }
            
        default: {
            return {...state}
        }
    }

}
