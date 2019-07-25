import { ActionCreator } from 'redux'

export const TEXT_SOURCE_TRANSLITERATED_ACCEPTED =
    'TEXT_SOURCE_TRANSLITERATED_ACCEPTED'
export const TEXT_SOURCE_TRANSLITERATED_REJECTED =
    'TEXT_SOURCE_TRANSLITERATED_REJECTED'

export interface ATextSourceTransliteratedAccepted {
    type: typeof TEXT_SOURCE_TRANSLITERATED_ACCEPTED
    text: string
}
export interface ATextSourceTransliteratedRejected {
    type: typeof TEXT_SOURCE_TRANSLITERATED_REJECTED
    error: Error
}

export const textSourceTransliteratedAccepted: ActionCreator<
    ATextSourceTransliteratedAccepted
> = (text: string): ATextSourceTransliteratedAccepted => ({
    type: TEXT_SOURCE_TRANSLITERATED_ACCEPTED,
    text,
})
export const textSourceTransliteratedRejected: ActionCreator<
    ATextSourceTransliteratedRejected
> = (error: Error): ATextSourceTransliteratedRejected => ({
    type: TEXT_SOURCE_TRANSLITERATED_REJECTED,
    error,
})
