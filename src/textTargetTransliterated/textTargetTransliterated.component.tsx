import React, { ReactElement } from 'react'
import { Text, StyleSheet } from 'react-native'
import { TextTargetTransliteratedStateProps } from './textTargetTransliterated.model'

const styles = StyleSheet.create({
    text: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
    },
})

const textTargetTransliterated: React.FC<TextTargetTransliteratedStateProps> = (
    props: TextTargetTransliteratedStateProps
): ReactElement => (
    <Text selectable style={styles.text}>
        {props.text}
    </Text>
)

export default textTargetTransliterated
