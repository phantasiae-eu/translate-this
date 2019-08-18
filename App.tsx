import React, { ReactElement } from 'react'
import Constants from 'expo-constants'
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native'
import Header from './src/header/Header.component'
import TextSourceTransliterated from './src/textSourceTransliterated/textSourceTransliterated.container'
import TextTargetTransliterated from './src/textTargetTransliterated/textTargetTransliterated.container'
import TextSource from './src/textSource/textSource.container'
import TextTarget from './src/textTarget/textTarget.container'
import LanguageSelector from './src/languageSelector/LanguageSelector.container'
import LanguageSwitch from './src/languageSwitch/languageSwitch.container'
import { ESelectors } from './src/languages/languages.model'

import { Provider } from 'react-redux'
import Languages from './src/languages/languages.container'

import store, { persistor } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'

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
        padding: 10,
    },
    selectors: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    selector: {
        width: '40%',
        borderWidth: 1,
        borderColor: 'grey',
    },
})

const App: React.FunctionComponent<{}> = (): ReactElement => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Languages />
                    <Header />
                    <Text>Source</Text>
                    <TextSource />
                    <TextSourceTransliterated />
                    <Text>Target</Text>
                    <TextTarget />
                    <TextTargetTransliterated />
                    <View style={styles.selectors}>
                        <LanguageSelector
                            selector={ESelectors.SOURCE}
                            style={styles.selector}
                        />
                        <LanguageSwitch />
                        <LanguageSelector
                            selector={ESelectors.TARGET}
                            style={styles.selector}
                        />
                    </View>
                    <Text>Work in progress!</Text>
                </View>
            </SafeAreaView>
        </PersistGate>
    </Provider>
)

export default App
