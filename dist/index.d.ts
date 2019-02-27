import { Component } from 'react';
interface IState {
    rating: number;
    showContactForm: boolean;
    review: string;
    reviewError: boolean;
}
interface IProps {
    okBtnText: string;
    cancelBtnText: string;
    count: number;
    defaultRating: number;
    showRating: boolean;
    sendBtnText: string;
    placeHolderText: string;
    writeComment: string;
    modalTitle: string;
    iosUrl?: string;
    androidUrl?: string;
    onClosed?(): void;
    sendContactUsForm?(st: IState): void;
}
export default class RateModal extends Component<IProps, IState> {
    static defaultProps: {
        okBtnText: string;
        cancelBtnText: string;
        count: number;
        defaultRating: number;
        showRating: boolean;
        sendBtnText: string;
        placeHolderText: string;
        writeComment: string;
        modalTitle: string;
        iosUrl: string;
        androidUrl: string;
    };
    constructor(props: IProps);
    render(): JSX.Element;
    private renderRateModal;
    private onClosed;
    private sendRate;
    private sendContactUsForm;
}
export {};
