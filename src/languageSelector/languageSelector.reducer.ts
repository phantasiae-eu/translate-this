import { Reducer } from 'redux'
import {
    LanguageSelector,
    defaultLanguageSelector,
} from './languageSelector.model'
import {
    ALanguageSelectorChange,
    LANGUAGE_SELECTOR_CHANGE,
} from './languageSelector.actions'
export const languageSelector: Reducer<
    LanguageSelector,
    ALanguageSelectorChange
> = (state = defaultLanguageSelector, action): LanguageSelector => {
    switch (action.type) {
        case LANGUAGE_SELECTOR_CHANGE:
            return {
                language: action.language,
            }

        default:
            return state
    }
}
