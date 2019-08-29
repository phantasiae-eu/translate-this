import { connect } from 'react-redux'
import TextSource from './textSource.component'
import { AppState } from '../store/store.model'
import {
    TextSourceStateProps,
    TextSourceDispatchProps,
    TextSourceMergeProps,
    TextSourceOwnProps,
} from './textSource.model'
import { Dispatch } from 'redux'
import {
    AChangeTextSource,
    changeTextSource,
    ATextSourceTransliterate,
    textSourceTransliterate,
} from './textSource.actions'

const mapStateToProps = (
    state: AppState,
    ownProps: TextSourceOwnProps
): TextSourceStateProps => ({
    text: state.textSource.text,
    sourceLanguage: state.languages.source,
    style: ownProps.style,
})

const mapDispatchToProps = (dispatch: Dispatch): TextSourceDispatchProps => ({
    changeText: (text: string): AChangeTextSource =>
        dispatch(changeTextSource(text)),
    dispatch,
})

const mergeProps = (
    stateProps: TextSourceStateProps,
    dispatchProps: TextSourceDispatchProps
): TextSourceStateProps & TextSourceDispatchProps | TextSourceMergeProps => ({
    ...stateProps,
    ...dispatchProps,
    changeText: (
        text: string
    ): [AChangeTextSource, ATextSourceTransliterate] => [
        dispatchProps.changeText(text),
        dispatchProps.dispatch(
            textSourceTransliterate(
                text,
                stateProps.sourceLanguage.filter(
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
)(TextSource)
