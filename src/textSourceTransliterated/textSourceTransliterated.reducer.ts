import { Reducer } from 'redux'
import {
    ATextSourceTransliteratedAccepted,
    TEXT_SOURCE_TRANSLITERATED_ACCEPTED,
} from './textSourceTransliterated.actions'
import { TextSourceTransliterated } from './textSourceTransliterated.model'
import { defaultTextTargetTransliterated } from '../textTargetTransliterated/textTargetTransliterated.model'

export const textSourceTransliterated: Reducer<
    TextSourceTransliterated,
    ATextSourceTransliteratedAccepted
> = (
    state: TextSourceTransliterated = defaultTextTargetTransliterated,
    action: ATextSourceTransliteratedAccepted
): TextSourceTransliterated => {
    switch (action.type) {
        case TEXT_SOURCE_TRANSLITERATED_ACCEPTED: {
            return {
                text: action.text,
            }
        }
        default:
            return state
    }
}
