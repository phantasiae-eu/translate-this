import { ActionCreator } from 'redux'

export const LANGUAGE_SELECTOR_CHANGE = 'LANGUAGE_SELECTOR_CHANGE'
export const LANGUAGE_SELECTOR_CHANGE_ACCEPTED =
    'LANGUAGE_SELECTOR_CHANGE_ACCEPTED'

export interface ALanguageSelectorChange {
    type: typeof LANGUAGE_SELECTOR_CHANGE
    language: string
}

export interface ALanguageSelectorChangeAccepted {
    type: typeof LANGUAGE_SELECTOR_CHANGE_ACCEPTED
    language: string
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
