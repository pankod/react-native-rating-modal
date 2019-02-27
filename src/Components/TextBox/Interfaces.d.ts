// Global Imports
import {
	KeyboardType,
	ReturnKeyType,
	KeyboardTypeIOS,
	TextStyle,
	ViewStyle,
	NativeSyntheticEvent,
	TextInputChangeEventData
} from 'react-native';

/**
 * @interface TextBox
 */
export module TextBox {
	export interface IProps {
		accessibilityLabel?: string;
		autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
		label?: string;
		value?: string;
		placeholder?: string;
		returnKeyType?: ReturnKeyType;
		secureTextEntry?: boolean;
		keyboardType?: KeyboardType | KeyboardTypeIOS;
		autoCorrect?: boolean;
		containerStyle?: ViewStyle | Array<ViewStyle>;
		textStyle?: TextStyle | Array<TextStyle>;
		disabled?: boolean;
		multiline?: boolean;
		autoFocus?: boolean;
		blurOnSubmit?: boolean;
		maxLength?: number;
		onChangeText?(text: string): void;
		onChange?(event: NativeSyntheticEvent<TextInputChangeEventData>): void;
		onBlur?(): void;
		onFocus?(): void;
		onSubmitEditing?(): void;
	}

	export interface INativeEvent {
		nativeEvent: {
			text: string;
			contentSize: {
				width: number;
				height: number;
			};
			target: number;
			eventCount: number;
		}
	}

	export interface IState {
		text: string;
		textboxWidth: number;
		textboxHeight: number;
	}
}
