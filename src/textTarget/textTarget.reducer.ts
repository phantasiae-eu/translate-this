import { Reducer } from 'redux'
import { TextTarget, defaultTextTarget } from './textTarget.model'
import { ATextTargetAccepted, TEXT_TARGET_ACCEPTED } from './textTarget.actions'

export const textTarget: Reducer<TextTarget, ATextTargetAccepted> = (
    state: TextTarget = defaultTextTarget,
    action
): TextTarget => {
    switch (action.type) {
        case TEXT_TARGET_ACCEPTED: {
            return {
                text: action.text,
            }
        }
        default:
            return state
    }
}
