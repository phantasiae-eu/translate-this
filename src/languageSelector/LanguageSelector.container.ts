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
import { ESelectors } from '../languages/languages.model'
import { StyleProp, ViewStyle } from 'react-native'

const mapStateToProps = (
    state: AppState,
    ownProps: { selector: ESelectors; style: StyleProp<ViewStyle> }
): LanguageSelectorStateProps => ({
    style: ownProps.style,
    languages:
        state.languages[
            ownProps.selector === ESelectors.SOURCE ? 'source' : 'target'
        ],
    selector: ownProps.selector,
})
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
