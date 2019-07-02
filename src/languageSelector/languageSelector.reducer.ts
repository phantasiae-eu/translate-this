import { Reducer, AnyAction } from 'redux'
import {
    LanguageSelector,
    defaultLanguageSelector,
} from './languageSelector.model'
export const languageSelector: Reducer<LanguageSelector, AnyAction> = (
    state = defaultLanguageSelector,
    action
): LanguageSelector => {
    switch (action.type) {
        default:
            return state
    }
}
