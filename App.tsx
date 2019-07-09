import React, { ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './src/header/Header.component'
import LanguageSelector from './src/languageSelector/LanguageSelector.container'
import { Provider } from 'react-redux'
import store from './src/store/store'
import Languages from './src/languages/languages.container'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const App: React.FunctionComponent<{}> = (): ReactElement => (
    <Provider store={store}>
        <View style={styles.container}>
            <Languages />
            <Header />
            <LanguageSelector />
            <Text>Work in progress!</Text>
        </View>
    </Provider>
)

export default App
