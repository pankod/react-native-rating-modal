"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var Styles_1 = require("./Styles");
var TextBox = (function (_super) {
    __extends(TextBox, _super);
    function TextBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            text: props.value || '',
            textboxHeight: 40,
            textboxWidth: 0
        };
        return _this;
    }
    TextBox.prototype.render = function () {
        var _this = this;
        return (<react_native_1.View style={[
            Styles_1.Styles.containerStyle,
            this.props.containerStyle,
            this.props.multiline ? { height: 80 } : {}
        ]}>
				<react_native_1.TextInput ref={function (input) { return _this.TextInputRef = input; }} accessibilityLabel={this.props.accessibilityLabel} autoCapitalize={this.props.autoCapitalize} autoFocus={this.props.autoFocus} placeholder={this.props.placeholder} autoCorrect={false} value={this.props.value} secureTextEntry={this.props.secureTextEntry} keyboardType={this.props.keyboardType} style={[
            Styles_1.Styles.textStyle,
            this.props.textStyle,
            this.props.disabled ? Styles_1.Styles.disabledStyle : {},
            this.props.multiline ? { height: 80 } : {}
        ]} underlineColorAndroid={'transparent'} onChangeText={this.onChange.bind(this)} onChange={this.props.onChange} onBlur={this.props.onBlur} onFocus={this.props.onFocus} editable={!this.props.disabled} multiline={this.props.multiline} onLayout={function (event) { return _this.setState({ textboxWidth: event.nativeEvent.layout.width }); }} numberOfLines={this.props.multiline ? 4 : 1} maxLength={this.props.maxLength} onSubmitEditing={this.props.onSubmitEditing} returnKeyType={this.props.returnKeyType}/>
			</react_native_1.View>);
    };
    TextBox.prototype.focus = function () {
        this.TextInputRef.focus();
    };
    TextBox.prototype.onChange = function (text) {
        if (this.props.onChangeText)
            this.props.onChangeText(text);
    };
    return TextBox;
}(React.Component));
exports.TextBox = TextBox;
//# sourceMappingURL=index.js.map