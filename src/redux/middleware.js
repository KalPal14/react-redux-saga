import { showErr } from "./actions"
import { CONST } from "./constants"

const forbiddenWords = ['php', 'Putin', 'spam']

export const forbiddenWordsMiddleware = (state) => {
   return function (next) {
      return function (action) {
         if (action.type === CONST.ADD_POST) {
            const filter = forbiddenWords.filter(word => action.payload.title.includes(word))
            if (filter.length) {
               return state.dispatch(showErr(`Нельзя использовать слова '${filter.join(", ")}'`))
            }
         }

         return next(action)
      }
   }
}