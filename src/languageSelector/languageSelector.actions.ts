import { ActionCreator } from 'redux'

export const LANGUAGE_SELECTOR_CHANGE = 'LANGUAGE_SELECTOR_CHANGE'
export const LANGUAGE_SELECTOR_CHANGE_ACCEPTED =
    'LANGUAGE_SELECTOR_CHANGE_ACCEPTED'
export const LANGUAGE_SELECTOR_CHANGE_REJECTED =
    'LANGUAGE_SELECTOR_CHANGE_REJECTED'

export interface ALanguageSelectorChange {
    type: typeof LANGUAGE_SELECTOR_CHANGE
    language: string
}

export interface ALanguageSelectorChangeAccepted {
    type: typeof LANGUAGE_SELECTOR_CHANGE_ACCEPTED
    language: string
}

export interface ALanguageSelectorChangeRejected {
    type: typeof LANGUAGE_SELECTOR_CHANGE_REJECTED
    error: Error
}

export const changeLanguage: ActionCreator<ALanguageSelectorChange> = (
    language: string
): ALanguageSelectorChange => ({
    type: LANGUAGE_SELECTOR_CHANGE,
    language,
})

export const changeLanguageAccepted: ActionCreator<
    ALanguageSelectorChangeAccepted
> = (language: string): ALanguageSelectorChangeAccepted => ({
    type: LANGUAGE_SELECTOR_CHANGE_ACCEPTED,
    language,
})

export const changeLanguageRejected: ActionCreator<
    ALanguageSelectorChangeRejected
> = (error: Error): ALanguageSelectorChangeRejected => ({
    type: LANGUAGE_SELECTOR_CHANGE_REJECTED,
    error,
})
