import { Dispatch } from 'redux'
import { AChangeTextSource } from './textSource.actions'

export interface TextSourceStateProps {
    text: string
}
export interface TextSourceDispatchProps {
    changeText: (text: string) => AChangeTextSource
    dispatch: Dispatch
}

export interface TextSource {
    text: string
}

export const defaultTextSource: TextSource = {
    text: '',
}
