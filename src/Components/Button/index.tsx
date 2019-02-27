// Global Imports
import React, { Component } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

// Local Imports
import { Styles } from './Styles';

// Interfaces
import { Button as IButton } from './Interfaces.d';

/**
 * @class Button Component
 */
export class Button extends Component<IButton.IProps, IButton.IState> {
	constructor(props: IButton.IProps) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<TouchableOpacity
				accessibilityLabel={this.props.accessibilityLabel}
				style={[Styles.containerStyle, this.props.containerStyle]}
				onPress={this.onPress.bind(this)}
			>
				{this.renderImage()}
				<Text style={[Styles.textStyle, this.props.textStyle]}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}

	private renderImage(): JSX.Element {
		return this.props.image && (<Image style={[Styles.imageStyle, this.props.imageStyle]} source={this.props.image} />);
	}

	private onPress(): void {
		const { disabled } = this.props;

		if (disabled) {
			return;
		} else {
			if (typeof this.props.onPress === 'function')
				this.props.onPress();
		}
	}
}
