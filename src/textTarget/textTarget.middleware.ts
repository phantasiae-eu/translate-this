import { Middleware, Dispatch } from 'redux'
import { AppState } from '../store/store.model'
import {
    ATextTargetAccepted,
    textTargetAccepted,
    textTargetRejected,
} from '../textTarget/textTarget.actions'
import {
    AChangeTextSource,
    CHANGE_TEXT_SOURCE,
} from '../textSource/textSource.actions'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { key } from '../../secretConfig'
import { Language } from '../languages/languages.model'

export const textTargetMiddleware: Middleware<{}, AppState> = (
    store
): ((
    next: Dispatch<AChangeTextSource>
) => (action: AChangeTextSource) => Promise<AChangeTextSource>) => (
    next: Dispatch<AChangeTextSource>
): ((action: AChangeTextSource) => Promise<AChangeTextSource>) => async (
    action: AChangeTextSource
): Promise<AChangeTextSource> => {
    const result = next(action)

    switch (action.type) {
        case CHANGE_TEXT_SOURCE: {
            try {
                console.log(
                    'store.getState().languages.source: ',
                    store
                        .getState()
                        .languages.source.filter(
                            (language: Language): boolean => language.selected
                        )
                )
                console.log(
                    'store.getState().languages.target: ',
                    store
                        .getState()
                        .languages.target.filter(
                            (language: Language): boolean => language.selected
                        )
                )
                const options: AxiosRequestConfig = {
                    method: 'post',
                    baseURL: 'https://api.cognitive.microsofttranslator.com',
                    url: 'translate',
                    params: {
                        'api-version': '3.0',
                        from: store
                            .getState()
                            .languages.source.filter(
                                (language: Language): boolean =>
                                    language.selected
                            )[0].code,
                        to: store
                            .getState()
                            .languages.target.filter(
                                (language: Language): boolean =>
                                    language.selected
                            )[0].code,
                    },
                    headers: {
                        'Ocp-Apim-Subscription-Key': key,
                        'Content-type': 'application/json',
                    },
                    data: [
                        {
                            text: action.text,
                        },
                    ],
                }
                await axios(options)
                    .then(
                        (res: AxiosResponse): AxiosResponse => {
                            console.log(res)
                            return res
                        }
                    )
                    .then(
                        (res: AxiosResponse): ATextTargetAccepted =>
                            store.dispatch(
                                textTargetAccepted(
                                    res.data[0].translations[0].text
                                )
                            )
                    )
            } catch (e) {
                store.dispatch(textTargetRejected(e))
            }
            break
        }
        default:
            break
    }

    return result
}
