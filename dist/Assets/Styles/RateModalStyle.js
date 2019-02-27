"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var Colors_1 = require("./Colors");
exports.Styles = react_native_1.StyleSheet.create({
    bigButton: {
        width: 130
    },
    button: {
        backgroundColor: Colors_1.Color.LightGreen[600],
        flex: 0,
        height: 30,
        marginHorizontal: 5,
        minWidth: 70,
        paddingHorizontal: 5
    },
    buttonCancel: {
        backgroundColor: Colors_1.Color.Transparent
    },
    buttonCancelText: {
        color: Colors_1.Color.Grey[500],
        fontWeight: '500',
        letterSpacing: 1
    },
    buttonContainer: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
        paddingHorizontal: 20
    },
    buttonText: {
        fontWeight: '500'
    },
    errorText: {
        color: Colors_1.Color.Red[500]
    },
    modalContainer: {
        backgroundColor: Colors_1.Color.White[500],
        borderRadius: 10
    },
    textBox: {
        borderBottomColor: Colors_1.Color.LightGreen[600],
        borderBottomWidth: 1,
        borderWidth: 0,
        margin: 20
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        marginHorizontal: 30,
        marginVertical: 15,
        textAlign: 'center'
    }
});
//# sourceMappingURL=RateModalStyle.js.map