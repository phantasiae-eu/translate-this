import { connect } from 'react-redux'
import Initialiser from './initialiser.component'
import { InitialiserDispatchProps } from './initialiser.model'
import { Dispatch } from 'redux'
import { AInitialiseLanguage, initialiseLanguage } from './initialiser.actions'

const mapDispatchToProps = (dispatch: Dispatch): InitialiserDispatchProps => ({
    initialiseLanguages: (): AInitialiseLanguage =>
        dispatch(initialiseLanguage()),
    dispatch,
})

export default connect(
    null,
    mapDispatchToProps
)(Initialiser)
