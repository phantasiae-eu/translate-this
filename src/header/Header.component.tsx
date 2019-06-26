import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'

export default class Header extends React.Component {
    public render(): ReactElement {
        return (
            <View>
                <Text>Translate This</Text>
            </View>
        )
    }
}
