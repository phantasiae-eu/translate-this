import { Language } from '../languages/languages.model'
import { TextSource } from '../textSource/textSource.model'
import { TextTarget } from '../textTarget/textTarget.model'
import { Transliteration } from '../transliteration/transliteration.model'
import { TextTargetTransliterated } from '../textTargetTransliterated/textTargetTransliterated.model'

export interface AppState {
    languages: { source: Language[]; target: Language[] }
    textSource: TextSource
    textTarget: TextTarget
    transliteration: Transliteration[]
    textTargetTransliterated: TextTargetTransliterated
}
