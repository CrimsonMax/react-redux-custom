import { showAlert } from "./actions"
import { CREATE_POST } from "./types"

const forbidden = ['путин', 'деньги', 'маски']

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.toLowerCase(w).includes(w))
                if (found.length) {
                    return dispatch(showAlert('Иди домой, путник.'))
                }
            }
            return next(action)
        }
    }
}