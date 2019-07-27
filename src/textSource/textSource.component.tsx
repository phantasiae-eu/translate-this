import React, { ReactElement } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import {
    TextSourceStateProps,
    TextSourceDispatchProps,
} from './textSource.model'
import {
    AChangeTextSource,
    ATextSourceTransliterate,
} from './textSource.actions'

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: 'grey',
    },
})

const textSource: React.FC<TextSourceStateProps & TextSourceDispatchProps> = (
    props: TextSourceStateProps & TextSourceDispatchProps
): ReactElement => (
    <TextInput
        style={styles.textInput}
        onChangeText={(
            text: string
        ): [AChangeTextSource, ATextSourceTransliterate] =>
            props.changeText(text, '')
        }
        value={props.text}
    />
)
export default textSource
