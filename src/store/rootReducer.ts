import { combineReducers } from 'redux'
import { languageSelector } from '../languageSelector/languageSelector.reducer'

const rootReducer = combineReducers({
    languageSelector,
})

export default rootReducer
