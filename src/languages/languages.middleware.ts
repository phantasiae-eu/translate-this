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
import { Language, Languages } from './languages.model'
import { baseURL, apiVersion } from '../../config'
import { initialiseOptions } from '../helpers/axios'

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
                        const translation: Languages = res.data.translation
                        return store.dispatch(
                            languagesInitialiseAccepted(
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
                store.dispatch(languagesInitialiseRejected(e))
            }
            break
        }
        default:
            break
    }
    return result
}
