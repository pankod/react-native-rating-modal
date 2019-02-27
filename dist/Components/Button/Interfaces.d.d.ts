import { ImageStyle, NativeTouchEvent, TextStyle, ViewStyle } from 'react-native';
export declare module Button {
    interface IProps {
        accessibilityLabel?: string;
        containerStyle?: ViewStyle | Array<ViewStyle>;
        textStyle?: TextStyle | Array<TextStyle>;
        text?: string;
        image?: Object;
        imageStyle?: ImageStyle;
        onPress?(event?: NativeTouchEvent): void;
        disabled?: boolean;
    }
    interface IState {
    }
}
