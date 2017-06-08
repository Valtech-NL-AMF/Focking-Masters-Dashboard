"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data = [{ id: 1, author: "Daniel Lo Nigro", text: "Hello ReactJS.NET World!" }, { id: 2, author: "Pete Hunt", text: "This is one comment" }, { id: 3, author: "Jordan Walke", text: "This is *another* comment" }];

var Comment = function (_React$Component) {
    _inherits(Comment, _React$Component);

    function Comment() {
        _classCallCheck(this, Comment);

        return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
    }

    _createClass(Comment, [{
        key: "rawMarkup",
        value: function rawMarkup() {
            var md = new Remarkable();
            var rawMarkup = md.render(this.props.children.toString());
            return { __html: rawMarkup };
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "comment" },
                React.createElement(
                    "h2",
                    { className: "commentAuthor" },
                    this.props.author
                ),
                React.createElement("span", { dangerouslySetInnerHTML: this.rawMarkup() })
            );
        }
    }]);

    return Comment;
}(React.Component);

;

var CommentList = function (_React$Component2) {
    _inherits(CommentList, _React$Component2);

    function CommentList() {
        _classCallCheck(this, CommentList);

        return _possibleConstructorReturn(this, (CommentList.__proto__ || Object.getPrototypeOf(CommentList)).apply(this, arguments));
    }

    _createClass(CommentList, [{
        key: "render",
        value: function render() {
            var commentNodes = this.props.data.map(function (comment) {
                return React.createElement(
                    Comment,
                    { author: comment.author, key: comment.id },
                    comment.text
                );
            });
            return React.createElement(
                "div",
                { className: "commentList" },
                commentNodes
            );
        }
    }]);

    return CommentList;
}(React.Component);

;

var CommentForm = function (_React$Component3) {
    _inherits(CommentForm, _React$Component3);

    function CommentForm() {
        _classCallCheck(this, CommentForm);

        return _possibleConstructorReturn(this, (CommentForm.__proto__ || Object.getPrototypeOf(CommentForm)).apply(this, arguments));
    }

    _createClass(CommentForm, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "commentForm" },
                "Hello, world! I am a CommentForm."
            );
        }
    }]);

    return CommentForm;
}(React.Component);

;

var CommentBox = function (_React$Component4) {
    _inherits(CommentBox, _React$Component4);

    function CommentBox(props) {
        _classCallCheck(this, CommentBox);

        var _this4 = _possibleConstructorReturn(this, (CommentBox.__proto__ || Object.getPrototypeOf(CommentBox)).call(this, props));

        _this4.state = { data: [] };
        var xhr = new XMLHttpRequest();
        xhr.open('get', _this4.props.url, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        }.bind(_this4);
        xhr.send();
        return _this4;
    }

    _createClass(CommentBox, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "commentBox" },
                React.createElement(
                    "h1",
                    null,
                    "Comments"
                ),
                React.createElement(CommentList, { data: this.state.data }),
                React.createElement(CommentForm, null)
            );
        }
    }]);

    return CommentBox;
}(React.Component);

;
ReactDOM.render(React.createElement(CommentBox, { url: "/comments" }), document.getElementById('content'));