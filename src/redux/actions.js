import { CONST } from "./constants";

export const addPost = (post) => ({
   type: CONST.ADD_POST,
   payload: post
})

export const fetchPosts = () => {
   return (dispatch) => {
      dispatch(showLoading())
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
         .then(resp => resp.json())
         .then(posts => {
            dispatch({ type: CONST.FETCH_POST, payload: posts })
            dispatch(hideLoading())
         })
         .catch(e => {
            dispatch(hideLoading())
            dispatch(showErr("Не удалось загрузить посты, попробуйте ещё раз"))
         })
   }
}

export const showLoading = () => ({
   type: CONST.SHOW_LOADING
})

export const hideLoading = () => ({
   type: CONST.HIDE_LOADING
})

export const showErr = (err_message) => {
   return (dispatch) => {
      dispatch({ type: CONST.SHOW_ERR, payload: err_message })
      setTimeout(() => dispatch(hideErr()), 3000)
   }
}

export const hideErr = () => ({
   type: CONST.SHOW_ERR,
})

// type: CONST.SHOW_ERR,
// payload: err_message