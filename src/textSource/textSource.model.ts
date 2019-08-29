import { Dispatch } from 'redux'
import {
    AChangeTextSource,
    ATextSourceTransliterate,
} from './textSource.actions'
import { Language } from '../languages/languages.model'
import { StyleProp } from 'react-native'

export interface TextSourceStateProps extends TextSourceOwnProps {
    text: string
    sourceLanguage: Language[]
}
export interface TextSourceDispatchProps {
    changeText: (text: string) => AChangeTextSource
    dispatch: Dispatch
}

export interface TextSourceMergeProps
    extends TextSourceStateProps,
        Omit<TextSourceDispatchProps, 'changeText'> {
    changeText: (
        text: string,
        to: string
    ) => [AChangeTextSource, ATextSourceTransliterate]
}

export interface TextSource {
    text: string
}

export const defaultTextSource: TextSource = {
    text: '',
}

interface TextSourceOwnPropsStyle {
    height: number
    width: string
    borderWidth: number
    borderColor: string
}

export interface TextSourceOwnProps {
    style: StyleProp<TextSourceOwnPropsStyle>
}
