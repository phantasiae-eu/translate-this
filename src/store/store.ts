import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import { languageSelectorMiddleware } from '../languageSelector/languageSelector.middleware'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(languageSelectorMiddleware))
)

export default store
