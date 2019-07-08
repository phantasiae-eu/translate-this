import { Reducer } from 'redux'
import { Language } from './initialiser.model'
import {
    AInitialiseLanguageAccepted,
    INITIALISE_LANGUAGE_ACCEPTED,
} from './initialiser.actions'
import {
    LANGUAGE_SELECTOR_CHANGE,
    ALanguageSelectorChange,
} from '../languageSelector/languageSelector.actions'

export const initialiser: Reducer<
    Language[],
    AInitialiseLanguageAccepted | ALanguageSelectorChange
> = (state = [], action): Language[] => {
    switch (action.type) {
        case INITIALISE_LANGUAGE_ACCEPTED: {
            return action.languages
        }
        case LANGUAGE_SELECTOR_CHANGE: {
            console.log(action.language)
            return state.map(
                (language): Language => ({
                    ...language,
                    selected: language.code === action.language,
                })
            )
        }
        default:
            return state
    }
}
