import { Dispatch } from 'redux'
import { ALanguagesChange } from '../languages/languages.actions'
import { Language } from '../languages/languages.model'

export interface LanguageSelectorStateProps {
    languages: Language[]
}

export interface LanguageSelectorDispatchProps {
    changeLanguage: (language: string) => ALanguagesChange
    dispatch: Dispatch
}
