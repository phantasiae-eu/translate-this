import { ActionCreator } from 'redux'

export const LANGUAGE_SWITCH = 'LANGUAGE_SWITCH'
export const LANGUAGE_SWITCH_ACCEPTED = 'LANGUAGE_SWITCH_ACCEPTED'
export const LANGUAGE_SWITCH_REJECTED = 'LANGUAGE_SWITCH_REJECTED'

export interface ALanguageSwitch {
    type: typeof LANGUAGE_SWITCH
}
export interface ALanguageSwitchAccepted {
    type: typeof LANGUAGE_SWITCH_ACCEPTED
    newSourceText: string
}
export interface ALanguageSwitchRejected {
    type: typeof LANGUAGE_SWITCH_REJECTED
    error: Error
}

export const languageSwitch: ActionCreator<
    ALanguageSwitch
> = (): ALanguageSwitch => ({
    type: LANGUAGE_SWITCH,
})
export const languageSwitchAccepted: ActionCreator<ALanguageSwitchAccepted> = (
    newSourceText: string
): ALanguageSwitchAccepted => ({
    type: LANGUAGE_SWITCH_ACCEPTED,
    newSourceText,
})
export const languageSwitchRejected: ActionCreator<ALanguageSwitchRejected> = (
    error: Error
): ALanguageSwitchRejected => ({
    type: LANGUAGE_SWITCH_REJECTED,
    error,
})
