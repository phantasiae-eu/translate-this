import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import { languagesMiddleware } from '../languages/languages.middleware'
import { textTargetMiddleware } from '../textTarget/textTarget.middleware'

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(languagesMiddleware, textTargetMiddleware)
    )
)

export default store
