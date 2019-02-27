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
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Styles_1 = require("./Styles");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        return _super.call(this, props) || this;
    }
    Button.prototype.render = function () {
        return (<react_native_1.TouchableOpacity accessibilityLabel={this.props.accessibilityLabel} style={[Styles_1.Styles.containerStyle, this.props.containerStyle]} onPress={this.onPress.bind(this)}>
				{this.renderImage()}
				<react_native_1.Text style={[Styles_1.Styles.textStyle, this.props.textStyle]}>{this.props.text}</react_native_1.Text>
			</react_native_1.TouchableOpacity>);
    };
    Button.prototype.renderImage = function () {
        return this.props.image && (<react_native_1.Image style={[Styles_1.Styles.imageStyle, this.props.imageStyle]} source={this.props.image}/>);
    };
    Button.prototype.onPress = function () {
        var disabled = this.props.disabled;
        if (disabled) {
            return;
        }
        else {
            if (typeof this.props.onPress === 'function')
                this.props.onPress();
        }
    };
    return Button;
}(react_1.Component));
exports.Button = Button;
//# sourceMappingURL=index.js.map