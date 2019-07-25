import { Middleware, Dispatch } from 'redux'
import { AppState } from '../store/store.model'
import {
    CHANGE_TEXT_SOURCE,
    AChangeTextSource,
} from '../textSource/textSource.actions'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { key } from '../../secretConfig'
import { baseURL, apiVersion } from '../../config'
import { transliterationOptions } from '../helpers/axios'
import { Transliteration } from '../transliteration/transliteration.model'
import { defaultTextTargetTransliterated } from '../textTargetTransliterated/textTargetTransliterated.model'
import {
    textSourceTransliteratedAccepted,
    ATextSourceTransliteratedAccepted,
    textSourceTransliteratedRejected,
} from './textSourceTransliterated.actions'

export const textSourceTransliteratedMiddleware: Middleware<{}, AppState> = (
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
                const selectedLanguage: Transliteration[] = store
                    .getState()
                    .transliteration.filter(
                        (language): boolean =>
                            language.code ===
                            store
                                .getState()
                                .languages.source.filter(
                                    (language): boolean => language.selected
                                )[0].code
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
                        selectedLanguage[0].code,
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
            break
        }
        default:
            break
    }
    return result
}
