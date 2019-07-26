import React, { ReactElement } from 'react'
import { Text, StyleSheet } from 'react-native'
import { TextSourceTransliteratedStateProps } from './textSourceTransliterated.model'

const styles = StyleSheet.create({
    text: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
    },
})

const textSourceTransliterated: React.FC<TextSourceTransliteratedStateProps> = (
    props: TextSourceTransliteratedStateProps
): ReactElement => (
    <Text selectable style={styles.text}>
        {props.text}
    </Text>
)

export default textSourceTransliterated
