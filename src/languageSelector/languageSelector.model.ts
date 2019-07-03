import { Dispatch } from 'redux'
import { ALanguageSelectorChange } from './languageSelector.actions'

export interface LanguageSelector {
    language: string
}

export const defaultLanguageSelector: LanguageSelector = {
    language: 'Italian',
}

export interface LanguageSelectorStateProps extends LanguageSelector {
    language: string
}

export interface LanguageSelectorDispatchProps {
    changeLanguage: (language: string) => ALanguageSelectorChange
    dispatch: Dispatch
}
