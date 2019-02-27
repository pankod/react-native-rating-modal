import * as React from 'react';
import { TextInput } from 'react-native';
import { TextBox as ITextBox } from './Interfaces';
export declare class TextBox extends React.Component<ITextBox.IProps, ITextBox.IState> {
    TextInputRef: TextInput;
    constructor(props: ITextBox.IProps);
    render(): JSX.Element;
    focus(): void;
    private onChange;
}
