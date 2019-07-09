import { Reducer } from 'redux'
import { Language } from './languages.model'
import {
    ALanguagesInitialiseAccepted,
    LANGUAGES_INITIALISE_ACCEPTED,
} from './languages.actions'
import { LANGUAGES_CHANGE, ALanguagesChange } from './languages.actions'

export const languages: Reducer<
    Language[],
    ALanguagesInitialiseAccepted | ALanguagesChange
> = (state = [], action): Language[] => {
    switch (action.type) {
        case LANGUAGES_INITIALISE_ACCEPTED: {
            return action.languages
        }
        case LANGUAGES_CHANGE: {
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
