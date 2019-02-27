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
var __assign = (this && this.__assign) || function () {
	__assign = Object.assign || function (t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
				t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
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
var AirbnbRating = __importStar(require("react-native-ratings"));
var Components_1 = require("./Components");
var RateModalStyle_1 = require("./Assets/Styles/RateModalStyle");
var RateModal = (function (_super) {
	__extends(RateModal, _super);
	function RateModal(props) {
		var _this = _super.call(this, props) || this;
		_this.state = {
			rating: 5,
			review: '',
			showContactForm: false,
			reviewError: false
		};
		return _this;
	}
	RateModal.prototype.render = function () {
		var _this = this;
		return (<react_native_1.Modal animationType="slide" visible={true} onRequestClose={function () { return _this.onClosed(); }}>
			{this.renderRateModal()}
		</react_native_1.Modal>);
	};
	RateModal.prototype.renderRateModal = function () {
		var _this = this;
		var modalContainer = RateModalStyle_1.Styles.modalContainer, title = RateModalStyle_1.Styles.title, buttonContainer = RateModalStyle_1.Styles.buttonContainer, button = RateModalStyle_1.Styles.button, buttonCancel = RateModalStyle_1.Styles.buttonCancel, buttonCancelText = RateModalStyle_1.Styles.buttonCancelText, errorText = RateModalStyle_1.Styles.errorText;
		var _a = this.props, okBtnText = _a.okBtnText, cancelBtnText = _a.cancelBtnText, count = _a.count, defaultRating = _a.defaultRating, showRating = _a.showRating, sendBtnText = _a.sendBtnText, placeHolderText = _a.placeHolderText, writeComment = _a.writeComment, modalTitle = _a.modalTitle, onClosed = _a.onClosed, sendContactUsForm = _a.sendContactUsForm;
		return (<react_native_1.View style={modalContainer}>
			{!this.state.showContactForm &&
				<react_native_1.View>
					<react_native_1.Text style={title}>{modalTitle}</react_native_1.Text>
					<AirbnbRating count={count} defaultRating={defaultRating} showRating={showRating} onFinishRating={function (e) { return _this.setState({ rating: e }); }} />

					<react_native_1.View style={buttonContainer}>
						<react_native_1.View style={{ flex: 1 }}></react_native_1.View>
						<Components_1.Button text={cancelBtnText} containerStyle={[button, buttonCancel]} textStyle={buttonCancelText} onPress={onClosed || this.onClosed.bind(this)} />
						<Components_1.Button text={okBtnText} containerStyle={button} onPress={this.sendRate.bind(this)} />
					</react_native_1.View>
				</react_native_1.View>}

			{this.state.showContactForm &&
				<react_native_1.View>
					<Components_1.TextBox containerStyle={[RateModalStyle_1.Styles.textBox]} textStyle={{ paddingVertical: 5 }} value={this.state.review} placeholder={placeHolderText} multiline autoFocus onChangeText={function (value) { return _this.setState({ review: value, reviewError: false }); }} />

					<react_native_1.View style={buttonContainer}>
						{this.state.reviewError &&
							<react_native_1.Text style={errorText}>
								{writeComment}
							</react_native_1.Text>}
						<react_native_1.View style={{ flex: 1 }}></react_native_1.View>
						<Components_1.Button text={sendBtnText} containerStyle={button} onPress={sendContactUsForm || this.sendContactUsForm.bind(this)} />
					</react_native_1.View>
				</react_native_1.View>}
		</react_native_1.View>);
	};
	RateModal.prototype.onClosed = function (remember) {
		if (remember === void 0) { remember = false; }
		console.log("Modal closed", remember);
	};
	RateModal.prototype.sendRate = function () {
		var _a = this.props, iosUrl = _a.iosUrl, androidUrl = _a.androidUrl;
		if (this.state.rating > 3)
			react_native_1.Platform.OS === 'ios' ?
				react_native_1.Linking.openURL(iosUrl) :
				react_native_1.Linking.openURL(androidUrl);
		else {
			this.setState({ showContactForm: true });
		}
	};
	RateModal.prototype.sendContactUsForm = function () {
		if (this.state.review.length > 0) {
			console.log("Sended form");
			if (this.props.sendContactUsForm) {
				this.props.sendContactUsForm(__assign({}, this.state));
			}
			this.onClosed();
		}
		else {
			this.setState({ reviewError: true });
		}
	};
	RateModal.defaultProps = {
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
	};
	return RateModal;
}(react_1.Component));
exports.default = RateModal;
//# sourceMappingURL=index.js.map
