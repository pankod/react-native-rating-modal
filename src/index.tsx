// Global Imports
import * as React from 'react';
import { Linking, Platform, Text, View, Modal } from 'react-native';
import * as AirbnbRating from 'react-native-ratings';

// Local Imports
import { Button, TextBox } from './Components';
import { Styles } from './Assets/Styles/RateModalStyle';

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

export default class RateModal extends React.Component<IProps, IState> {

	static defaultProps = {
		okBtnText: 'Rate',
		cancelBtnText: 'Cancel',
		count: 5,
		defaultRating: 5,
		showRating: false,
		sendBtnText: 'Send',
		placeHolderText: 'Write your comments and comments here ...',
		writeComment: 'please provide feedback',
		modalTitle: 'How many stars do you give app?',
		iosUrl: '',
		androidUrl: ''
	}

	constructor(props: IProps) {
		super(props);

		this.state = {
			rating: 5,
			review: '',
			showContactForm: false,
			reviewError: false
		};
	}

	public render(): JSX.Element {
		return (
			<Modal animationType="slide" visible={true} onRequestClose={() => this.onClosed()}>
				{this.renderRateModal()}
			</Modal>
		);
	}

	private renderRateModal(): JSX.Element {
		const { modalContainer, title, buttonContainer, button, buttonCancel, buttonCancelText, errorText } = Styles;
		const {
			okBtnText,
			cancelBtnText,
			count,
			defaultRating,
			showRating,
			sendBtnText,
			placeHolderText,
			writeComment,
			modalTitle,
			onClosed,
			sendContactUsForm } = this.props;
		return (
			<View style={modalContainer}>
				{!this.state.showContactForm &&
					<View>
						<Text style={title}>{modalTitle}</Text>
						<AirbnbRating
							count={count}
							defaultRating={defaultRating}
							// size={(width - 150) / 5}
							showRating={showRating}
							onFinishRating={(e: number) => this.setState({ rating: e })}
						/>

						<View style={buttonContainer}>
							<View style={{ flex: 1 }}></View>
							<Button
								text={cancelBtnText}
								containerStyle={[button, buttonCancel]}
								textStyle={buttonCancelText}
								onPress={onClosed || this.onClosed.bind(this)}
							/>
							<Button
								text={okBtnText}
								containerStyle={button}
								onPress={this.sendRate.bind(this)}
							/>
						</View>
					</View>
				}

				{this.state.showContactForm &&
					<View>
						<TextBox
							containerStyle={[Styles.textBox]}
							textStyle={{ paddingVertical: 5 }}
							value={this.state.review}
							placeholder={placeHolderText}
							multiline
							autoFocus
							onChangeText={(value: string) => this.setState({ review: value, reviewError: false })}
						/>

						<View style={buttonContainer}>
							{this.state.reviewError &&
								<Text style={errorText}>
									{writeComment}
								</Text>
							}
							<View style={{ flex: 1 }}></View>
							<Button
								text={sendBtnText}
								containerStyle={button}
								onPress={sendContactUsForm || this.sendContactUsForm.bind(this)}
							/>
						</View>
					</View>
				}
			</View>
		);
	}

	private onClosed(remember: boolean = false): void {
		console.log("Modal closed", remember);
	}

	private sendRate(): void {
		const { iosUrl, androidUrl } = this.props;
		if (this.state.rating > 3)
			Platform.OS === 'ios' ?
				Linking.openURL(iosUrl) :
				Linking.openURL(androidUrl);
		else {
			this.setState({ showContactForm: true });
		}
	}

	private sendContactUsForm(): void {
		if (this.state.review.length > 0) {
			console.log("Sended form");
			if (this.props.sendContactUsForm) {
				this.props.sendContactUsForm({ ...this.state });
			}
			this.onClosed();
		}
		else {
			this.setState({ reviewError: true });
		}
	}
}
