// Global Imports
import { StyleSheet, ImageStyle, TextStyle, ViewStyle } from 'react-native';

// Local Imports
import { Color, PrimaryColor } from '../../Assets/Styles/Colors';

// Interfaces

/**
 * Button Styles
 */
export let Styles = StyleSheet.create({
	containerStyle: {
		alignItems: 'center',
		backgroundColor: Color.Transparent,
		borderColor: PrimaryColor.White,
		borderRadius: 4,
		borderWidth: 1,
		flexDirection: 'row',
		height: 40,
		justifyContent: 'center'
	} as ViewStyle,

	imageStyle: {
		paddingHorizontal: 10
	} as ImageStyle,

	textStyle: {
		color: PrimaryColor.White
	} as TextStyle
});
