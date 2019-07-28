import { connect } from 'react-redux'
import LanguageSwitch from './languageSwith.component'
import {
    LanguageSwitchDispatchProps,
    LanguageSwitchStateProps,
    LanguageSwitchMergeProps,
} from './languageSwitch.model'
import { Dispatch } from 'redux'
import { ALanguageSwitch, languageSwitch } from './languageSwitch.actions'
import { AppState } from '../store/store.model'
import {
    textSourceTransliterate,
    ATextSourceTransliterate,
} from '../textSource/textSource.actions'

const mapStateToProps = (state: AppState): LanguageSwitchStateProps => ({
    targetLanguages: state.languages.target,
    textTarget: state.textTarget,
})

const mapDispatchToProps = (
    dispatch: Dispatch
): LanguageSwitchDispatchProps => ({
    switchLanguage: (): ALanguageSwitch => dispatch(languageSwitch()),
    dispatch,
})

const mergeProps = (
    stateProps: LanguageSwitchStateProps,
    dispatchProps: LanguageSwitchDispatchProps
): LanguageSwitchDispatchProps | LanguageSwitchMergeProps => ({
    ...stateProps,
    ...dispatchProps,
    switchLanguage: (): [ALanguageSwitch, ATextSourceTransliterate] => [
        dispatchProps.switchLanguage(),
        dispatchProps.dispatch(
            textSourceTransliterate(
                stateProps.textTarget.text,
                stateProps.targetLanguages.filter(
                    (language): boolean => language.selected
                )[0].code
            )
        ),
    ],
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(LanguageSwitch)
