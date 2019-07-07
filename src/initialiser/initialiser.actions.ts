import { ActionCreator } from 'redux'

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
    languages: Languages
}
export interface Languages {
    [key: string]: { dir: string; name: string; nativeName: string }
}

export const initialiseLanguage: ActionCreator<
    AInitialiseLanguage
> = (): AInitialiseLanguage => ({ type: INITIALISE_LANGUAGE })

export const initialiseLanguageAccepted: ActionCreator<
    AInitialiseLanguageAccepted
> = (languages: Languages): AInitialiseLanguageAccepted => ({
    type: INITIALISE_LANGUAGE_ACCEPTED,
    languages,
})

export const initialiseLanguageRejected: ActionCreator<
    AInitialiseLanguageRejected
> = (error: Error): AInitialiseLanguageRejected => ({
    type: INITIALISE_LANGUAGE_REJECTED,
    error,
})
