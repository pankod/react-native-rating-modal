import * as React from 'react';
import { Button as IButton } from './Interfaces.d';
export declare class Button extends React.Component<IButton.IProps, IButton.IState> {
    constructor(props: IButton.IProps);
    render(): JSX.Element;
    private renderImage;
    private onPress;
}
