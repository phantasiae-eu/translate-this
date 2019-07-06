import { Middleware, Dispatch } from 'redux'
import { AppState } from '../store/store.model'
import {
    LANGUAGE_SELECTOR_CHANGE,
    changeLanguageAccepted,
    ALanguageSelectorChange,
    ALanguageSelectorChangeAccepted,
    changeLanguageRejected,
} from './languageSelector.actions'
import axios from 'axios'

export const languageSelectorMiddleware: Middleware<{}, AppState> = (
    store
): ((
    next: Dispatch<ALanguageSelectorChange>
) => (action: ALanguageSelectorChange) => Promise<ALanguageSelectorChange>) => (
    next: Dispatch<ALanguageSelectorChange>
): ((
    action: ALanguageSelectorChange
) => Promise<ALanguageSelectorChange>) => async (
    action: ALanguageSelectorChange
): Promise<ALanguageSelectorChange> => {
    const result = next(action)

    switch (action.type) {
        case LANGUAGE_SELECTOR_CHANGE: {
            try {
                await axios('https://jsonplaceholder.typicode.com/posts/1')
                    .then((res): void => console.log(res))
                    .then(
                        (): ALanguageSelectorChangeAccepted =>
                            store.dispatch(
                                changeLanguageAccepted(action.language)
                            )
                    )
            } catch (e) {
                store.dispatch(changeLanguageRejected(e))
            }
            break
        }
        default:
            break
    }

    return result
}
