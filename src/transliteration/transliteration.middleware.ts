import { Middleware, Dispatch } from 'redux'
import { AppState } from '../store/store.model'
import {
    TEXT_TARGET_TRANSLITERATE,
    ATextTargetTransliterate,
} from '../textTarget/textTarget.actions'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { key } from '../../secretConfig'
import { baseURL, apiVersion } from '../../config'
import { transliterationOptions } from '../helpers/axios'
import {
    textTargetTransliteratedAccepted,
    ATextTargetTransliteratedAccepted,
    textTargetTransliteratedRejected,
} from '../textTargetTransliterated/textTargetTransliterated.actions'
import { Transliteration } from './transliteration.model'
import { defaultTextTargetTransliterated } from '../textTargetTransliterated/textTargetTransliterated.model'

export const transliterationMiddleware: Middleware<{}, AppState> = (
    store
): ((
    next: Dispatch<ATextTargetTransliterate>
) => (
    action: ATextTargetTransliterate
) => Promise<ATextTargetTransliterate>) => (
    next: Dispatch<ATextTargetTransliterate>
): ((
    action: ATextTargetTransliterate
) => Promise<ATextTargetTransliterate>) => async (
    action: ATextTargetTransliterate
): Promise<ATextTargetTransliterate> => {
    const result = next(action)
    switch (action.type) {
        case TEXT_TARGET_TRANSLITERATE: {
            try {
                const selectedLanguage: Transliteration[] = store
                    .getState()
                    .transliteration.filter(
                        (language): boolean => language.code === action.to
                    )
                if (selectedLanguage.length === 0) {
                    store.dispatch(
                        textTargetTransliteratedAccepted(
                            defaultTextTargetTransliterated.text
                        )
                    )
                } else {
                    const options: AxiosRequestConfig = transliterationOptions(
                        baseURL,
                        apiVersion,
                        key,
                        action.to,
                        selectedLanguage[0].scripts[0].code,
                        'Latn',
                        action.text
                    )
                    await axios(options).then(
                        (
                            res: AxiosResponse
                        ): ATextTargetTransliteratedAccepted =>
                            store.dispatch(
                                textTargetTransliteratedAccepted(
                                    res.data.shift().text
                                )
                            )
                    )
                }
            } catch (e) {
                store.dispatch(textTargetTransliteratedRejected(e))
            }
            break
        }
        default:
            break
    }

    return result
}
