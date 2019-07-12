import { combineReducers } from 'redux'
import { languages } from '../languages/languages.reducer'
import { textSource } from '../textSource/textSource.reducer'
import { textTarget } from '../textTarget/textTarget.reducer'

const rootReducer = combineReducers({
    languages,
    textSource,
    textTarget,
})

export default rootReducer
