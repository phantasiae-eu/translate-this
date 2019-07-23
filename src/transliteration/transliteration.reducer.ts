import { Reducer } from 'redux'
import {
    ATransliterationInitialiseAccepted,
    TRANSLITERATION_INITIALISE_ACCEPTED,
} from '../languages/languages.actions'
import { Transliteration } from './transliteration.model'

export const transliteration: Reducer<
    Transliteration[],
    ATransliterationInitialiseAccepted
> = (state = [], action): Transliteration[] => {
    switch (action.type) {
        case TRANSLITERATION_INITIALISE_ACCEPTED: {
            return action.payload
        }
        default:
            return state
    }
}
