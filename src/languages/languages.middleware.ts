import { AppState } from '../store/store.model'
import { Middleware, Dispatch } from 'redux'
import {
    LANGUAGES_INITIALISE,
    ALanguagesInitialise,
    languagesInitialiseRejected,
    languagesInitialiseAccepted,
    ALanguagesInitialiseAccepted,
} from './languages.actions'
import axios, { AxiosRequestConfig } from 'axios'
import { Languages } from './languages.model'
import { baseURL, apiVersion } from '../../config'
import { initialiseOptions } from '../helpers/axios'
import { initialise } from '../helpers/languages'

export const languagesMiddleware: Middleware<{}, AppState> = (
    store
): ((
    next: Dispatch<ALanguagesInitialise>
) => (action: ALanguagesInitialise) => Promise<ALanguagesInitialise>) => (
    next: Dispatch<ALanguagesInitialise>
): ((action: ALanguagesInitialise) => Promise<ALanguagesInitialise>) => async (
    action: ALanguagesInitialise
): Promise<ALanguagesInitialise> => {
    const result = next(action)
    switch (action.type) {
        case LANGUAGES_INITIALISE: {
            try {
                const options: AxiosRequestConfig = initialiseOptions(
                    baseURL,
                    apiVersion
                )
                axios(options).then(
                    (res): ALanguagesInitialiseAccepted => {
                        const retrievedLanguages: Languages =
                            res.data.translation
                        return store.dispatch(
                            languagesInitialiseAccepted(
                                initialise(
                                    store.getState().languages,
                                    retrievedLanguages
                                )
                            )
                        )
                    }
                )
            } catch (e) {
                store.dispatch(languagesInitialiseRejected(e))
            }
            break
        }
        default:
            break
    }
    return result
}
