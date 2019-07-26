import { Middleware, Dispatch } from 'redux'
import { AppState } from '../store/store.model'
import {
    ALanguagesChange,
    LANGUAGES_CHANGE,
    languageChangeRejected,
    ALanguageChangeAccepted,
    languageChangeAccepted,
} from '../languages/languages.actions'
import { Language } from '../languages/languages.model'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { translateOptions } from '../helpers/axios'
import { baseURL, apiVersion } from '../../config'
import { key } from '../../secretConfig'
import axios from 'axios'
import {
    ATextTargetAccepted,
    textTargetAccepted,
    textTargetTransliterate,
    ATextTargetTransliterate,
} from '../textTarget/textTarget.actions'
import { ESelectors } from '../languages/languages.model'
import {
    ATextSourceTransliterate,
    textSourceTransliterate,
} from '../textSource/textSource.actions'

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
                console.log(action.language)
                const from: string =
                    action.selector === ESelectors.SOURCE
                        ? action.language
                        : store
                              .getState()
                              .languages['source'].filter(
                                  (language: Language): boolean =>
                                      language.selected
                              )[0].code
                const to: string =
                    action.selector === ESelectors.TARGET
                        ? action.language
                        : store
                              .getState()
                              .languages['target'].filter(
                                  (language: Language): boolean =>
                                      language.selected
                              )[0].code
                const text: string = store.getState().textSource.text
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
                    ALanguageChangeAccepted,
                    ATextTargetTransliterate,
                    ATextSourceTransliterate
                ] => [
                    store.dispatch(
                        textTargetAccepted(res.data[0].translations[0].text)
                    ),
                    store.dispatch(
                        languageChangeAccepted(action.language, action.selector)
                    ),
                    store.dispatch(
                        textTargetTransliterate(
                            res.data[0].translations[0].text,
                            res.data[0].translations[0].to
                        )
                    ),
                    store.dispatch(
                        textSourceTransliterate(
                            store.getState().textSource.text,
                            action.language
                        )
                    ),
                ])
            } catch (e) {
                store.dispatch(languageChangeRejected(e))
            }

            break
        }
        default:
            break
    }
    return result
}
