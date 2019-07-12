import { Dispatch } from 'redux'
import { ALanguagesChange } from '../languages/languages.actions'
import { Language, ESelectors } from '../languages/languages.model'
import { StyleProp, ViewStyle } from 'react-native'

export interface LanguageSelectorStateProps {
    style: StyleProp<ViewStyle>
    languages: Language[]
    selector: ESelectors
}

export interface LanguageSelectorDispatchProps {
    changeLanguage: (language: string, selector: ESelectors) => ALanguagesChange
    dispatch: Dispatch
}
