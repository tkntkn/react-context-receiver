import * as React from 'react';

type ContextComponentType<V, P> = (props: P, value: V) => React.ReactElement<P>

export type ContextReceiver<V> = <P>(component: ContextComponentType<V, P>) => React.FunctionComponent<P>

export const getContextReceiver: (<V> (Context: React.Context<V>) => ContextReceiver<V>) =
    ({Consumer}) => Component => props => <Consumer>{ value => Component(props, value) }</Consumer>
