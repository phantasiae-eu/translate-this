import { ActionCreator } from 'redux'

export const CHANGE_TEXT_SOURCE = 'CHANGE_TEXT_SOURCE'
export const TEXT_SOURCE_TRANSLITERATE = 'TEXT_SOURCE_TRANSLITERATE'

export interface AChangeTextSource {
    type: typeof CHANGE_TEXT_SOURCE
    text: string
}
export interface ATextSourceTransliterate {
    type: typeof TEXT_SOURCE_TRANSLITERATE
    text: string
    to: string
}

export const changeTextSource: ActionCreator<AChangeTextSource> = (
    text: string
): AChangeTextSource => ({
    type: CHANGE_TEXT_SOURCE,
    text,
})
export const textSourceTransliterate: ActionCreator<
    ATextSourceTransliterate
> = (text: string, to: string): ATextSourceTransliterate => ({
    type: TEXT_SOURCE_TRANSLITERATE,
    text,
    to,
})
