import { Dispatch } from 'redux'
import { ALanguageSelectorChange } from './languageSelector.actions'
import { Language } from '../initialiser/initialiser.model'

export interface LanguageSelector {
    language: string
}

export const defaultLanguageSelector: LanguageSelector = {
    language: 'Italian',
}

export interface LanguageSelectorStateProps extends LanguageSelector {
    language: string
    languages: Language[]
}

export interface LanguageSelectorDispatchProps {
    changeLanguage: (language: string) => ALanguageSelectorChange
    dispatch: Dispatch
}
