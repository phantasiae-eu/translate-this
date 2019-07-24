import { ActionCreator } from 'redux'

export const TEXT_TARGET_TRANSLITERATED_ACCEPTED =
    'TEXT_TARGET_TRANSLITERATED_ACCEPTED'
export const TEXT_TARGET_TRANSLITERATED_REJECTED =
    'TEXT_TARGET_TRANSLITERATED_REJECTED'

export interface ATextTargetTransliteratedAccepted {
    type: typeof TEXT_TARGET_TRANSLITERATED_ACCEPTED
    text: string
}

export interface ATextTargetTransliteratedRejected {
    type: typeof TEXT_TARGET_TRANSLITERATED_REJECTED
    error: Error
}

export const textTargetTransliteratedAccepted: ActionCreator<
    ATextTargetTransliteratedAccepted
> = (text: string): ATextTargetTransliteratedAccepted => ({
    type: TEXT_TARGET_TRANSLITERATED_ACCEPTED,
    text,
})
export const textTargetTransliteratedRejected: ActionCreator<
    ATextTargetTransliteratedRejected
> = (error: Error): ATextTargetTransliteratedRejected => ({
    type: TEXT_TARGET_TRANSLITERATED_REJECTED,
    error,
})
