import { ActionCreator } from 'redux'

export const TEXT_TARGET_ACCEPTED = 'TEXT_TARGET_ACCEPTED'
export const TEXT_TARGET_REJECTED = 'TEXT_TARGET_REJECTED'
export const TEXT_TARGET_TRANSLITERATE = 'TEXT_TARGET_TRANSLITERATE'

export interface ATextTargetAccepted {
    type: typeof TEXT_TARGET_ACCEPTED
    text: string
}
export interface ATextTargetRejected {
    type: typeof TEXT_TARGET_REJECTED
    error: Error
}

export interface ATextTargetTransliterate {
    type: typeof TEXT_TARGET_TRANSLITERATE
    text: string
    to: string
}

export const textTargetAccepted: ActionCreator<ATextTargetAccepted> = (
    text: string
): ATextTargetAccepted => ({
    type: TEXT_TARGET_ACCEPTED,
    text,
})
export const textTargetRejected: ActionCreator<ATextTargetRejected> = (
    error: Error
): ATextTargetRejected => ({
    type: TEXT_TARGET_REJECTED,
    error,
})

export const textTargetTransliterate: ActionCreator<
    ATextTargetTransliterate
> = (text: string, to: string): ATextTargetTransliterate => ({
    type: TEXT_TARGET_TRANSLITERATE,
    text,
    to,
})
