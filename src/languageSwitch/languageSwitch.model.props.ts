import { Dispatch } from 'redux'
import { ALanguageSwitch } from './languageSwitch.actions'

export interface LanguageSwitchDispatchProps {
    switchLanguage: () => ALanguageSwitch
    dispatch: Dispatch
}
