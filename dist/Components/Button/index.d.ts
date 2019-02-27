import { Component } from 'react';
import { Button as IButton } from './Interfaces.d';
export declare class Button extends Component<IButton.IProps, IButton.IState> {
    constructor(props: IButton.IProps);
    render(): JSX.Element;
    private renderImage;
    private onPress;
}
