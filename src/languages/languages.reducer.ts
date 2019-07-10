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
import { LANGUAGES_CHANGE, ALanguagesChange } from './languages.actions'

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
    ALanguagesInitialiseAccepted | ALanguagesChange
> = (state = defaultLanguageSelector, action): LanguageSelector => {
    switch (action.type) {
        case LANGUAGES_INITIALISE_ACCEPTED: {
            return {
                source: deepCopyLanguage(action.languages),
                target: deepCopyLanguage(action.languages),
            }
        }
        case LANGUAGES_CHANGE: {
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
        default:
            return state
    }
}