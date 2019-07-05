import { Middleware, Dispatch } from 'redux'
import { AppState } from '../store/store.model'
import {
    LANGUAGE_SELECTOR_CHANGE,
    changeLanguageAccepted,
    ALanguageSelectorChange,
} from './languageSelector.actions'

export const languageSelectorMiddleware: Middleware<{}, AppState> = (
    store
): ((
    next: Dispatch<ALanguageSelectorChange>
) => (action: ALanguageSelectorChange) => ALanguageSelectorChange) => (
    next: Dispatch<ALanguageSelectorChange>
): ((action: ALanguageSelectorChange) => ALanguageSelectorChange) => (
    action: ALanguageSelectorChange
): ALanguageSelectorChange => {
    const result = next(action)

    switch (action.type) {
        case LANGUAGE_SELECTOR_CHANGE: {
            store.dispatch(changeLanguageAccepted(action.language))
            break
        }
        default:
            break
    }
    return result
}
