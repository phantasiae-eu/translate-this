import React, { ReactElement } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import {
    TextSourceStateProps,
    TextSourceDispatchProps,
} from './textSource.model'
import { AChangeTextSource } from './textSource.actions'

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: 'grey',
    },
})

export default class TextSource extends React.Component<
    TextSourceStateProps & TextSourceDispatchProps
> {
    public constructor(
        props: Readonly<TextSourceStateProps & TextSourceDispatchProps>
    ) {
        super(props)
    }
    public render(): ReactElement {
        return (
            <TextInput
                style={styles.textInput}
                onChangeText={(text: string): AChangeTextSource =>
                    this.props.changeText(text)
                }
                value={this.props.text}
            />
        )
    }
}
