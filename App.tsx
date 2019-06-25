import React, { ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const App: React.FunctionComponent<{}> = (): ReactElement => (
    <View style={styles.container}>
        <Text>Work in progress!</Text>
    </View>
)

export default App
