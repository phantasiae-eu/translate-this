import { combineReducers } from 'redux'
import { languages } from '../languages/languages.reducer'
import { textSource } from '../textSource/textSource.reducer'
import { textTarget } from '../textTarget/textTarget.reducer'
import { transliteration } from '../transliteration/transliteration.reducer'
import { textTargetTransliterated } from '../textTargetTransliterated/textTargetTransliterated.reducer'

const rootReducer = combineReducers({
    languages,
    textSource,
    textTarget,
    transliteration,
    textTargetTransliterated,
})

export default rootReducer
