// Global Imports
import { ImageStyle, NativeTouchEvent, TextStyle, ViewStyle } from 'react-native';


export module Button {
	export interface IProps {
		accessibilityLabel?: string;
		containerStyle?: ViewStyle | Array<ViewStyle>;
		textStyle?: TextStyle | Array<TextStyle>;
		text?: string;
		image?: Object;
		imageStyle?: ImageStyle;
		onPress?(event?: NativeTouchEvent): void;
		disabled?: boolean;
	}

	export interface IState {

	}
}
