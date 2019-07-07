import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import { languageSelectorMiddleware } from '../languageSelector/languageSelector.middleware'
import { initialiserMiddleware } from '../initialiser/initialiser.middleware'

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(languageSelectorMiddleware, initialiserMiddleware)
    )
)

export default store
