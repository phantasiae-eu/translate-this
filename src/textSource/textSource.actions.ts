import { ActionCreator } from 'redux'

export const CHANGE_TEXT_SOURCE = 'CHANGE_TEXT_SOURCE'

export interface AChangeTextSource {
    type: typeof CHANGE_TEXT_SOURCE
    text: string
}

export const changeTextSource: ActionCreator<AChangeTextSource> = (
    text: string
): AChangeTextSource => ({
    type: CHANGE_TEXT_SOURCE,
    text,
})
