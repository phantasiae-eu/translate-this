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
import { baseURL, apiVersion } from '../../config'
import { Language } from '../languages/languages.model'
import { translateOptions } from '../helpers/axios'
import {
    LANGUAGE_SWITCH,
    ALanguageSwitch,
    languageSwitchAccepted,
    languageSwitchRejected,
    ALanguageSwitchAccepted,
} from '../languageSwitch/languageSwitch.actions'

export const textTargetMiddleware: Middleware<{}, AppState> = (
    store
): ((
    next: Dispatch<AChangeTextSource | ALanguageSwitch>
) => (
    action: AChangeTextSource | ALanguageSwitch
) => Promise<AChangeTextSource | ALanguageSwitch>) => (
    next: Dispatch<AChangeTextSource | ALanguageSwitch>
): ((
    action: AChangeTextSource | ALanguageSwitch
) => Promise<AChangeTextSource | ALanguageSwitch>) => async (
    action: AChangeTextSource | ALanguageSwitch
): Promise<AChangeTextSource | ALanguageSwitch> => {
    const result = next(action)

    switch (action.type) {
        case CHANGE_TEXT_SOURCE: {
            try {
                const from: string = store
                    .getState()
                    .languages['source'].filter(
                        (language: Language): boolean => language.selected
                    )[0].code
                const to: string = store
                    .getState()
                    .languages['target'].filter(
                        (language: Language): boolean => language.selected
                    )[0].code
                const text: string = action.text
                const options: AxiosRequestConfig = translateOptions(
                    baseURL,
                    apiVersion,
                    from,
                    to,
                    key,
                    text
                )
                await axios(options).then(
                    (res: AxiosResponse): ATextTargetAccepted =>
                        store.dispatch(
                            textTargetAccepted(res.data[0].translations[0].text)
                        )
                )
            } catch (e) {
                store.dispatch(textTargetRejected(e))
            }
            break
        }
        case LANGUAGE_SWITCH: {
            try {
                const from: string = store
                    .getState()
                    .languages['target'].filter(
                        (language: Language): boolean => language.selected
                    )[0].code
                const to: string = store
                    .getState()
                    .languages['source'].filter(
                        (language: Language): boolean => language.selected
                    )[0].code
                const text: string = store.getState().textTarget.text
                const options: AxiosRequestConfig = translateOptions(
                    baseURL,
                    apiVersion,
                    from,
                    to,
                    key,
                    text
                )
                await axios(options).then((res: AxiosResponse): [
                    ATextTargetAccepted,
                    ALanguageSwitchAccepted
                ] => [
                    store.dispatch(
                        textTargetAccepted(res.data[0].translations[0].text)
                    ),
                    store.dispatch(languageSwitchAccepted(text)),
                ])
            } catch (e) {
                store.dispatch(languageSwitchRejected(e))
            }
        }
        default:
            break
    }

    return result
}
