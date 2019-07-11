import React, { ReactElement } from 'react'
import Constants from 'expo-constants'
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native'
import Header from './src/header/Header.component'
import LanguageSelectorSource from './src/languageSelectorSource/LanguageSelector.container'
import LanguageSelectorTarget from './src/languageSelectorTarget/LanguageSelector.container'

import { Provider } from 'react-redux'
import store from './src/store/store'
import Languages from './src/languages/languages.container'

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'yellow',
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    selectors: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

const App: React.FunctionComponent<{}> = (): ReactElement => (
    <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Languages />
                <Header />
                <View style={styles.selectors}>
                    <LanguageSelectorSource />
                    <LanguageSelectorTarget />
                </View>

                <Text>Work in progress!</Text>
            </View>
        </SafeAreaView>
    </Provider>
)

export default App
