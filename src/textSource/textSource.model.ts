import { Dispatch } from 'redux'
import {
    AChangeTextSource,
    ATextSourceTransliterate,
} from './textSource.actions'
import { Language } from '../languages/languages.model'

export interface TextSourceStateProps {
    text: string
    sourceLanguage: Language[]
}
export interface TextSourceDispatchProps {
    changeText: (text: string) => AChangeTextSource
    dispatch: Dispatch
}

export interface TextSourceMergeProps extends TextSourceStateProps {
    changeText: (
        text: string,
        to: string
    ) => [AChangeTextSource, ATextSourceTransliterate]
    dispatch: Dispatch
}

export interface TextSource {
    text: string
}

export const defaultTextSource: TextSource = {
    text: '',
}
