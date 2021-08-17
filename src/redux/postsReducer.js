import { CONST } from "./constants"

const initialState = {
   posts: [],
   fetchedPosts: []
}

const postsReducer = (state = initialState, action) => {
   switch (action.type) {
      case CONST.ADD_POST:
         return {
            ...state,
            posts: [...state.posts, action.payload]
         }
      case CONST.FETCH_POST:
         return {
            ...state,
            fetchedPosts: [...state.fetchedPosts, ...action.payload]
         }
      default:
         return state
   }
}

export default postsReducer