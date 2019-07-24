import { Reducer } from 'redux'
import {
    ATextTargetTransliteratedAccepted,
    TEXT_TARGET_TRANSLITERATED_ACCEPTED,
} from './textTargetTransliterated.actions'
import {
    TextTargetTransliterated,
    defaultTextTargetTransliterated,
} from './textTargetTransliterated.model'

export const textTargetTransliterated: Reducer<
    TextTargetTransliterated,
    ATextTargetTransliteratedAccepted
> = (
    state: TextTargetTransliterated = defaultTextTargetTransliterated,
    action: ATextTargetTransliteratedAccepted
): TextTargetTransliterated => {
    switch (action.type) {
        case TEXT_TARGET_TRANSLITERATED_ACCEPTED: {
            return { text: action.text }
        }
        default:
            return state
    }
}
