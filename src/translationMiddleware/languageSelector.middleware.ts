import { Middleware, Dispatch } from 'redux'
import { AppState } from '../store/store.model'
import {
    LANGUAGES_CHANGE,
    changeLanguageAccepted,
    ALanguagesChange,
    ALanguagesChangeAccepted,
    changeLanguageRejected,
} from '../languages/languages.actions'
import axios, { AxiosRequestConfig } from 'axios'
import { key } from '../../secretConfig'

export const languageSelectorMiddleware: Middleware<{}, AppState> = (
    store
): ((
    next: Dispatch<ALanguagesChange>
) => (action: ALanguagesChange) => Promise<ALanguagesChange>) => (
    next: Dispatch<ALanguagesChange>
): ((action: ALanguagesChange) => Promise<ALanguagesChange>) => async (
    action: ALanguagesChange
): Promise<ALanguagesChange> => {
    const result = next(action)

    switch (action.type) {
        case LANGUAGES_CHANGE: {
            try {
                const options: AxiosRequestConfig = {
                    method: 'post',
                    baseURL: 'https://api.cognitive.microsofttranslator.com',
                    url: 'translate',
                    params: {
                        'api-version': '3.0',
                        from: 'en',
                        to: 'zh-Hans',
                    },
                    headers: {
                        'Ocp-Apim-Subscription-Key': key,
                        'Content-type': 'application/json',
                    },
                    data: [
                        {
                            text: 'Hello World!',
                        },
                    ],
                }
                await axios(options)
                    .then((res): void => console.log(res))
                    .then(
                        (): ALanguagesChangeAccepted =>
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
