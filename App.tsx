import React, { ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './src/Header'

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
        <Header></Header>
        <Text>Work in progress!</Text>
    </View>
)

export default App
