import { ActionCreator } from 'redux'

export const LANGUAGE_SWITCH = 'LANGUAGE_SWITCH'

export interface ALanguageSwitch {
    type: typeof LANGUAGE_SWITCH
}

export const languageSwitch: ActionCreator<
    ALanguageSwitch
> = (): ALanguageSwitch => ({
    type: LANGUAGE_SWITCH,
})
