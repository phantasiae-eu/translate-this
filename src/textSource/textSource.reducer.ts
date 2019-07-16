import { Reducer } from 'redux'
import { TextSource, defaultTextSource } from './textSource.model'
import { AChangeTextSource, CHANGE_TEXT_SOURCE } from './textSource.actions'
import {
    LANGUAGE_SWITCH_ACCEPTED,
    ALanguageSwitchAccepted,
} from '../languageSwitch/languageSwitch.actions'

export const textSource: Reducer<
    TextSource,
    AChangeTextSource | ALanguageSwitchAccepted
> = (state: TextSource = defaultTextSource, action): TextSource => {
    switch (action.type) {
        case CHANGE_TEXT_SOURCE: {
            return {
                text: action.text,
            }
        }
        case LANGUAGE_SWITCH_ACCEPTED: {
            return {
                text: action.newSourceText,
            }
        }
        default:
            return state
    }
}
