import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import { languagesMiddleware } from '../languages/languages.middleware'
import { textTargetMiddleware } from '../textTarget/textTarget.middleware'
import { languageSelectorMiddleware } from '../languageSelector/languageSelector.middleware'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(
            languagesMiddleware,
            textTargetMiddleware,
            languageSelectorMiddleware
        )
    )
)

export const persistor = persistStore(store)

export default store
