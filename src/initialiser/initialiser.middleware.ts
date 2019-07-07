import { AppState } from '../store/store.model'
import { Middleware, Dispatch } from 'redux'
import {
    INITIALISE_LANGUAGE,
    AInitialiseLanguage,
    initialiseLanguageRejected,
    initialiseLanguageAccepted,
    AInitialiseLanguageAccepted,
} from './initialiser.actions'
import axios, { AxiosRequestConfig } from 'axios'

export const initialiserMiddleware: Middleware<{}, AppState> = (
    store
): ((
    next: Dispatch<AInitialiseLanguage>
) => (action: AInitialiseLanguage) => Promise<AInitialiseLanguage>) => (
    next: Dispatch<AInitialiseLanguage>
): ((action: AInitialiseLanguage) => Promise<AInitialiseLanguage>) => async (
    action: AInitialiseLanguage
): Promise<AInitialiseLanguage> => {
    const result = next(action)
    switch (action.type) {
        case INITIALISE_LANGUAGE: {
            try {
                const options: AxiosRequestConfig = {
                    method: 'get',
                    baseURL: 'https://api.cognitive.microsofttranslator.com',
                    url: 'languages',
                    params: { 'api-version': '3.0' },
                }
                axios(options).then(
                    (res): AInitialiseLanguageAccepted =>
                        store.dispatch(
                            initialiseLanguageAccepted(res.data.translation)
                        )
                )
            } catch (e) {
                store.dispatch(initialiseLanguageRejected(e))
            }
            break
        }
        default:
            break
    }
    return result
}
