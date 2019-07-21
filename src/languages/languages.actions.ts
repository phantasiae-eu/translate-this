import { ActionCreator } from 'redux'
import { LanguageSelector, Transliteration } from './languages.model'
import { ESelectors } from './languages.model'

export const LANGUAGES_INITIALISE = 'LANGUAGES_INITIALISE'
export const LANGUAGES_INITIALISE_ACCEPTED = 'LANGUAGES_INITIALISE_ACCEPTED'
export const LANGUAGES_INITIALISE_REJECTED = 'LANGUAGES_INITIALISE_REJECTED'
export const LANGUAGES_CHANGE = 'LANGUAGES_CHANGE'
export const LANGUAGE_CHANGE_ACCEPTED = 'LANGUAGE_CHANGE_ACCEPTED'
export const LANGUAGE_CHANGE_REJECTED = 'LANGUAGE_CHANGE_REJECTED'
export const TRANSLITERATION_INITIALISE_ACCEPTED =
    'TRANSLITERATION_INITIALISE_ACCEPTED'

export interface ALanguagesInitialise {
    type: typeof LANGUAGES_INITIALISE
}

export interface ALanguagesInitialiseRejected {
    type: typeof LANGUAGES_INITIALISE_REJECTED
    error: Error
}

export interface ALanguagesInitialiseAccepted {
    type: typeof LANGUAGES_INITIALISE_ACCEPTED
    languages: LanguageSelector
}

export interface ALanguagesChange {
    type: typeof LANGUAGES_CHANGE
    language: string
    selector: ESelectors
}

export interface ALanguageChangeAccepted {
    type: typeof LANGUAGE_CHANGE_ACCEPTED
    language: string
    selector: ESelectors
}

export interface ALanguageChangeRejected {
    type: typeof LANGUAGE_CHANGE_REJECTED
    error: Error
}

export interface ATransliterationInitialiseAccepted {
    type: typeof TRANSLITERATION_INITIALISE_ACCEPTED
    payload: Transliteration[]
}

export const languagesInitialise: ActionCreator<
    ALanguagesInitialise
> = (): ALanguagesInitialise => ({ type: LANGUAGES_INITIALISE })

export const languagesInitialiseAccepted: ActionCreator<
    ALanguagesInitialiseAccepted
> = (languages: LanguageSelector): ALanguagesInitialiseAccepted => ({
    type: LANGUAGES_INITIALISE_ACCEPTED,
    languages,
})

export const languagesInitialiseRejected: ActionCreator<
    ALanguagesInitialiseRejected
> = (error: Error): ALanguagesInitialiseRejected => ({
    type: LANGUAGES_INITIALISE_REJECTED,
    error,
})

export const languagesChange: ActionCreator<ALanguagesChange> = (
    language: string,
    selector: ESelectors
): ALanguagesChange => ({
    type: LANGUAGES_CHANGE,
    language,
    selector,
})

export const languageChangeAccepted: ActionCreator<ALanguageChangeAccepted> = (
    language: string,
    selector: ESelectors
): ALanguageChangeAccepted => ({
    type: LANGUAGE_CHANGE_ACCEPTED,
    language,
    selector,
})

export const languageChangeRejected: ActionCreator<ALanguageChangeRejected> = (
    error: Error
): ALanguageChangeRejected => ({
    type: LANGUAGE_CHANGE_REJECTED,
    error,
})

export const transliterationInitialiseAccepted: ActionCreator<
    ATransliterationInitialiseAccepted
> = (payload: Transliteration[]): ATransliterationInitialiseAccepted => ({
    type: TRANSLITERATION_INITIALISE_ACCEPTED,
    payload,
})
