export const initialState = {
  logged: false,
  email: "",
  uid: "",
  displayName: "",
  photoURL: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        logged: true
      }
    case LOG_OUT:
        return{
          ...state,
          logged: false
        }
    case RESET_USER_INFO:
        return initialState
    case SET_USER_INFO:
        return{
          ...state,
          ...action.payload
        }
    
    default:
      return state
  }
};
