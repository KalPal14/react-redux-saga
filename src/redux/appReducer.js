import { CONST } from "./constants"

const initialState = {
   loading: false,
   err: ""

}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case CONST.SHOW_LOADING:
         return {
            ...state,
            loading: true
         }
      case CONST.HIDE_LOADING:
         return {
            ...state,
            loading: false
         }
      case CONST.SHOW_ERR:
         return {
            ...state,
            err: action.payload
         }
      case CONST.HIDE_ERR:
         return {
            ...state,
            err: ""
         }
      default:
         return state
   }
}

export default appReducer