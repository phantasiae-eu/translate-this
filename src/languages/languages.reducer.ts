import { Reducer } from 'redux'
import {
    Language,
    ESelectors,
    LanguageSelector,
    defaultLanguageSelector,
} from './languages.model'
import {
    ALanguagesInitialiseAccepted,
    LANGUAGES_INITIALISE_ACCEPTED,
} from './languages.actions'
import {
    LANGUAGE_CHANGE_ACCEPTED,
    ALanguageChangeAccepted,
} from './languages.actions'
import {
    LANGUAGE_SWITCH_ACCEPTED,
    ALanguageSwitchAccepted,
} from '../languageSwitch/languageSwitch.actions'

const deepCopyLanguage = (ar: Language[]): Language[] =>
    JSON.parse(JSON.stringify(ar))

const selectLanguage = (ar: Language[], languageSelected: string): Language[] =>
    ar.map(
        (language): Language => ({
            ...language,
            selected: language.code === languageSelected,
        })
    )

export const languages: Reducer<
    LanguageSelector,
    | ALanguagesInitialiseAccepted
    | ALanguageChangeAccepted
    | ALanguageSwitchAccepted
> = (state = defaultLanguageSelector, action): LanguageSelector => {
    switch (action.type) {
        case LANGUAGES_INITIALISE_ACCEPTED: {
            return {
                source: deepCopyLanguage(action.languages.source),
                target: deepCopyLanguage(action.languages.target),
            }
        }
        case LANGUAGE_CHANGE_ACCEPTED: {
            return action.selector === ESelectors.SOURCE
                ? {
                      source: selectLanguage(state.source, action.language),
                      target: [...state.target],
                  }
                : {
                      source: [...state.source],
                      target: selectLanguage(state.target, action.language),
                  }
        }
        case LANGUAGE_SWITCH_ACCEPTED: {
            return {
                source: [...state.target],
                target: [...state.source],
            }
        }
        default:
            return state
    }
}
