import { ActionCreator } from 'redux'
import { Language } from './languages.model'

export const LANGUAGES_INITIALISE = 'LANGUAGES_INITIALISE'
export const LANGUAGES_INITIALISE_ACCEPTED = 'LANGUAGES_INITIALISE_ACCEPTED'
export const LANGUAGES_INITIALISE_REJECTED = 'LANGUAGES_INITIALISE_REJECTED'
export const LANGUAGES_CHANGE = 'LANGUAGES_CHANGE'

export interface ALanguagesInitialise {
    type: typeof LANGUAGES_INITIALISE
}
export interface ALanguagesInitialiseRejected {
    type: typeof LANGUAGES_INITIALISE_REJECTED
    error: Error
}
export interface ALanguagesInitialiseAccepted {
    type: typeof LANGUAGES_INITIALISE_ACCEPTED
    languages: Language[]
}
export interface ALanguagesChange {
    type: typeof LANGUAGES_CHANGE
    language: string
}

export const languagesInitialise: ActionCreator<
    ALanguagesInitialise
> = (): ALanguagesInitialise => ({ type: LANGUAGES_INITIALISE })

export const languagesInitialiseAccepted: ActionCreator<
    ALanguagesInitialiseAccepted
> = (languages: Language[]): ALanguagesInitialiseAccepted => ({
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
    language: string
): ALanguagesChange => ({
    type: LANGUAGES_CHANGE,
    language,
})
