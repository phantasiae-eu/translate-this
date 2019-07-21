import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
    languagesChange,
    ALanguagesChange,
} from '../languages/languages.actions'
import {
    LanguageSelectorStateProps,
    LanguageSelectorDispatchProps,
} from './languageSelector.model'
import { AppState } from '../store/store.model'
import LanguageSelector from './LanguageSelector.component'
import { ESelectors, Language } from '../languages/languages.model'
import { StyleProp, ViewStyle } from 'react-native'

const mapStateToProps = (
    state: AppState,
    ownProps: { selector: ESelectors; style: StyleProp<ViewStyle> }
): LanguageSelectorStateProps => {
    const languages: Language[] =
        state.languages[
            ownProps.selector === ESelectors.SOURCE ? 'source' : 'target'
        ]
    const selectedLanguage: Language = languages
        .filter((obj): string => (obj.selected ? obj.code : null))
        .shift()
    return {
        style: ownProps.style,
        languages,
        selector: ownProps.selector,
        selectedCode: selectedLanguage && selectedLanguage.code,
    }
}
const mapDispatchToProps = (
    dispatch: Dispatch
): LanguageSelectorDispatchProps => ({
    changeLanguage: (
        language: string,
        selector: ESelectors
    ): ALanguagesChange => dispatch(languagesChange(language, selector)),
    dispatch,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LanguageSelector)
