import { Reducer } from 'redux'
import {
    LanguageSelector,
    defaultLanguageSelector,
} from './languageSelector.model'
import {
    ALanguageSelectorChangeAccepted,
    LANGUAGE_SELECTOR_CHANGE_ACCEPTED,
} from './languageSelector.actions'
export const languageSelector: Reducer<
    LanguageSelector,
    ALanguageSelectorChangeAccepted
> = (state = defaultLanguageSelector, action): LanguageSelector => {
    switch (action.type) {
        case LANGUAGE_SELECTOR_CHANGE_ACCEPTED:
            return {
                language: action.language,
            }

        default:
            return state
    }
}
