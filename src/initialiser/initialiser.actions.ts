import { ActionCreator } from 'redux'
import { Language } from './initialiser.model'

export const INITIALISE_LANGUAGE = 'INITIALISE_LANGUAGE'
export const INITIALISE_LANGUAGE_ACCEPTED = 'INITIALISE_LANGUAGE_ACCEPTED'
export const INITIALISE_LANGUAGE_REJECTED = 'INITIALISE_LANGUAGE_REJECTED'

export interface AInitialiseLanguage {
    type: typeof INITIALISE_LANGUAGE
}
export interface AInitialiseLanguageRejected {
    type: typeof INITIALISE_LANGUAGE_REJECTED
    error: Error
}
export interface AInitialiseLanguageAccepted {
    type: typeof INITIALISE_LANGUAGE_ACCEPTED
    languages: Language[]
}

export const initialiseLanguage: ActionCreator<
    AInitialiseLanguage
> = (): AInitialiseLanguage => ({ type: INITIALISE_LANGUAGE })

export const initialiseLanguageAccepted: ActionCreator<
    AInitialiseLanguageAccepted
> = (languages: Language[]): AInitialiseLanguageAccepted => ({
    type: INITIALISE_LANGUAGE_ACCEPTED,
    languages,
})

export const initialiseLanguageRejected: ActionCreator<
    AInitialiseLanguageRejected
> = (error: Error): AInitialiseLanguageRejected => ({
    type: INITIALISE_LANGUAGE_REJECTED,
    error,
})
