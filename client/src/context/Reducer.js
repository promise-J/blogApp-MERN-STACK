const Reducer = (state, action)=> {
    switch(action.type){
        case "LOGIN_START": 
          return{
              user: null,
              isGetting: true,
              error: false
          }
        case "LOGIN_SUCCESS": 
          return{
              user: action.payload,
              isGetting: false,
              error: false
          }
        case "LOGIN_FAILURE": 
          return{
              user: null,
              isGetting: false,
              error: true
          }
        case "LOGOUT": 
          return{
              user: null,
              isGetting: false,
              error: false
          }
        case "UPDATE_START": 
          return{
              user: null,
              isGetting: true,
              error: false
          }
        case "UPDATE_SUCCESS": 
          return{
              user: action.payload,
              isGetting: false,
              error: false
          }
        case "UPDATE_FAILURE": 
          return{
              user: null,
              isGetting: false,
              error: true
          }
          default:
              return state
    }
}

export default Reducer

