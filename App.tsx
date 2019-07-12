import React, { ReactElement } from 'react'
import Constants from 'expo-constants'
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native'
import Header from './src/header/Header.component'
import TextSource from './src/textSource/textSource.container'
import TextTarget from './src/textTarget/textTarget.container'
import LanguageSelector from './src/languageSelector/LanguageSelector.container'
import { ESelectors } from './src/languages/languages.model'

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
        width: '100%',
        height: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'grey',
    },
})

const App: React.FunctionComponent<{}> = (): ReactElement => (
    <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Languages />
                <Header />
                <TextSource />
                <View style={styles.selectors}>
                    <LanguageSelector selector={ESelectors.SOURCE} />
                    <LanguageSelector selector={ESelectors.TARGET} />
                </View>
                <TextTarget />
                <Text>Work in progress!</Text>
            </View>
        </SafeAreaView>
    </Provider>
)

export default App
