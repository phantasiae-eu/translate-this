import { Middleware, Dispatch } from 'redux'
import { AppState } from '../store/store.model'
import {
    TEXT_TARGET_TRANSLITERATE,
    ATextTargetTransliterate,
} from '../textTarget/textTarget.actions'
import {
    TEXT_SOURCE_TRANSLITERATE,
    ATextSourceTransliterate,
} from '../textSource/textSource.actions'
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
import {
    textSourceTransliteratedRejected,
    textSourceTransliteratedAccepted,
    ATextSourceTransliteratedAccepted,
} from '../textSourceTransliterated/textSourceTransliterated.actions'

export const transliterationMiddleware: Middleware<{}, AppState> = (
    store
): ((
    next: Dispatch<ATextTargetTransliterate | ATextSourceTransliterate>
) => (
    action: ATextTargetTransliterate | ATextSourceTransliterate
) => Promise<ATextTargetTransliterate | ATextSourceTransliterate>) => (
    next: Dispatch<ATextTargetTransliterate | ATextSourceTransliterate>
): ((
    action: ATextTargetTransliterate | ATextSourceTransliterate
) => Promise<ATextTargetTransliterate | ATextSourceTransliterate>) => async (
    action: ATextTargetTransliterate | ATextSourceTransliterate
): Promise<ATextTargetTransliterate | ATextSourceTransliterate> => {
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
        case TEXT_SOURCE_TRANSLITERATE: {
            try {
                const selectedLanguage: Transliteration[] = store
                    .getState()
                    .transliteration.filter(
                        (language): boolean => language.code === action.to
                    )
                if (selectedLanguage.length === 0) {
                    store.dispatch(
                        textSourceTransliteratedAccepted(
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
                        ): ATextSourceTransliteratedAccepted =>
                            store.dispatch(
                                textSourceTransliteratedAccepted(
                                    res.data.shift().text
                                )
                            )
                    )
                }
            } catch (e) {
                store.dispatch(textSourceTransliteratedRejected(e))
            }
        }
        default:
            break
    }

    return result
}
