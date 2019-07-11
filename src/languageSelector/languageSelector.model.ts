import { Dispatch } from 'redux'
import { ALanguagesChange } from '../languages/languages.actions'
import { Language, ESelectors } from '../languages/languages.model'

export interface LanguageSelectorStateProps {
    languages: Language[]
    selector: ESelectors
}

export interface LanguageSelectorDispatchProps {
    changeLanguage: (language: string, selector: ESelectors) => ALanguagesChange
    dispatch: Dispatch
}
