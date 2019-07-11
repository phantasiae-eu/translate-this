import { Language } from '../languages/languages.model'
import { TextSource } from '../textSource/textSource.model'

export interface AppState {
    languages: { source: Language[]; target: Language[] }
    textSource: TextSource
}
