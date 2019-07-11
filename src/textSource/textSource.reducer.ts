import { Reducer } from 'redux'
import { TextSource, defaultTextSource } from './textSource.model'
import { AChangeTextSource, CHANGE_TEXT_SOURCE } from './textSource.actions'

export const textSource: Reducer<TextSource, AChangeTextSource> = (
    state: TextSource = defaultTextSource,
    action
): TextSource => {
    switch (action.type) {
        case CHANGE_TEXT_SOURCE: {
            return {
                text: action.text,
            }
        }
        default:
            return state
    }
}
