import { connect } from 'react-redux'
import LanguageSwitch from './languageSwith.component'
import { LanguageSwitchDispatchProps } from './languageSwitch.model.props'
import { Dispatch } from 'redux'
import { ALanguageSwitch, languageSwitch } from './languageSwitch.actions'

const mapDispatchToProps = (
    dispatch: Dispatch
): LanguageSwitchDispatchProps => ({
    switchLanguage: (): ALanguageSwitch => dispatch(languageSwitch()),
    dispatch,
})

export default connect(
    null,
    mapDispatchToProps
)(LanguageSwitch)
