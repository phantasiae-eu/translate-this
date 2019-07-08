import { LanguageSelector } from '../languageSelector/languageSelector.model'
import { Language } from '../initialiser/initialiser.model'

export interface AppState {
    languageSelector: LanguageSelector
    initialiser: Language[]
}
