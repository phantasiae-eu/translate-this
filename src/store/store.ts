import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import { initialiserMiddleware } from '../initialiser/initialiser.middleware'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(initialiserMiddleware))
)

export default store
