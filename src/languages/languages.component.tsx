import React, { ReactNode } from 'react'
import { LanguagesDispatchProps } from './languages.model'

export default class Languages extends React.Component<LanguagesDispatchProps> {
    public constructor(props: Readonly<LanguagesDispatchProps>) {
        super(props)
    }

    public componentDidMount(): void {
        this.props.languagesInitialise()
    }

    public render(): ReactNode {
        return null
    }
}
