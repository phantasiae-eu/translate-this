import { combineReducers } from 'redux'
import { languages } from '../languages/languages.reducer'
import { textSource } from '../textSource/textSource.reducer'

const rootReducer = combineReducers({
    languages,
    textSource,
})

export default rootReducer
