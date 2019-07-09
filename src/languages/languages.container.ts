import { connect } from 'react-redux'
import Languages from './languages.component'
import { LanguagesDispatchProps } from './languages.model'
import { Dispatch } from 'redux'
import { ALanguagesInitialise, languagesInitialise } from './languages.actions'

const mapDispatchToProps = (dispatch: Dispatch): LanguagesDispatchProps => ({
    languagesInitialise: (): ALanguagesInitialise =>
        dispatch(languagesInitialise()),
    dispatch,
})

export default connect(
    null,
    mapDispatchToProps
)(Languages)
