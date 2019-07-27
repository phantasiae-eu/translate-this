import { Middleware, Dispatch } from 'redux'
import { AppState } from '../store/store.model'
import {
    CHANGE_TEXT_SOURCE,
    AChangeTextSource,
    textSourceTransliterate,
} from '../textSource/textSource.actions'
import {
    ALanguageSwitch,
    LANGUAGE_SWITCH,
} from '../languageSwitch/languageSwitch.actions'

export const textSourceTransliteratedMiddleware: Middleware<{}, AppState> = (
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
        case LANGUAGE_SWITCH: {
            const to: string = store
                .getState()
                .languages.target.filter(
                    (language): boolean => language.selected
                )[0].code
            const text: string = store.getState().textTarget.text
            store.dispatch(textSourceTransliterate(text, to))
        }
        default:
            break
    }
    return result
}
