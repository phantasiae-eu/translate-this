import React, { ReactNode } from 'react'
import { InitialiserDispatchProps } from './initialiser.model'

export default class Initialiser extends React.Component<
    InitialiserDispatchProps
> {
    public constructor(props: Readonly<InitialiserDispatchProps>) {
        super(props)
    }

    public componentDidMount(): void {
        this.props.initialiseLanguages()
    }

    public render(): ReactNode {
        return null
    }
}
