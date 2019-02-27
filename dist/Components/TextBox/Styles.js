"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var Colors_1 = require("../../Assets/Styles/Colors");
exports.Styles = react_native_1.StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        marginHorizontal: 20,
        position: 'relative'
    },
    disabledStyle: {
        backgroundColor: Colors_1.Color.Grey['100'],
        color: Colors_1.Color.Grey['500']
    },
    hiddenText: {
        backgroundColor: 'black',
        borderColor: 'transparent',
        color: 'white',
        fontSize: 16,
        left: 1000,
        position: 'absolute',
        top: 1000
    },
    textStyle: {
        color: Colors_1.PrimaryColor.Black,
        flex: 1,
        fontSize: 16,
        lineHeight: 20,
        minHeight: 40,
        textAlignVertical: 'center'
    }
});
//# sourceMappingURL=Styles.js.map