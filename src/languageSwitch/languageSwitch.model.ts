import { Dispatch } from 'redux'
import { ALanguageSwitch } from './languageSwitch.actions'
import { Language } from '../languages/languages.model'
import { TextTarget } from '../textTarget/textTarget.model'
import { ATextSourceTransliterate } from '../textSource/textSource.actions'

export interface LanguageSwitchStateProps {
    targetLanguages: Language[]
    textTarget: TextTarget
}

export interface LanguageSwitchDispatchProps {
    switchLanguage: () => ALanguageSwitch
    dispatch: Dispatch
}

export interface LanguageSwitchMergeProps extends LanguageSwitchStateProps {
    switchLanguage: () => [ALanguageSwitch, ATextSourceTransliterate]
    dispatch: Dispatch
}
