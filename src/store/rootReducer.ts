import { combineReducers } from 'redux'
import { languageSelector } from '../languageSelector/languageSelector.reducer'
import { initialiser } from '../initialiser/initialiser.reducer'

const rootReducer = combineReducers({
    languageSelector,
    initialiser,
})

export default rootReducer
