import { combineReducers } from 'redux'
import { languages } from '../languages/languages.reducer'

const rootReducer = combineReducers({
    languages,
})

export default rootReducer
