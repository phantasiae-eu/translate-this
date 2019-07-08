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
import { Language, Languages } from './initialiser.model'

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
                    (res): AInitialiseLanguageAccepted => {
                        const translation: Languages = res.data.translation
                        return store.dispatch(
                            initialiseLanguageAccepted(
                                Object.entries(translation).map(
                                    (obj, i): Language => ({
                                        code: obj['0'],
                                        ...obj['1'],
                                        selected: i === 0 ? true : false,
                                    })
                                )
                            )
                        )
                    }
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
