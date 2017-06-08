"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_React$Component) {
    _inherits(Comment, _React$Component);

    function Comment() {
        _classCallCheck(this, Comment);

        return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
    }

    _createClass(Comment, [{
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
                this.props.children
            );
        }
    }]);

    return Comment;
}(React.Component);

;
var CommentList = React.createClass({
    displayName: "CommentList",

    render: function render() {
        return React.createElement(
            "div",
            { className: "commentList" },
            React.createElement(
                Comment,
                { author: "Daniel Lo Nigro" },
                "Hello ReactJS.NET World!"
            ),
            React.createElement(
                Comment,
                { author: "Pete Hunt" },
                "This is one comment"
            ),
            React.createElement(
                Comment,
                { author: "Jordan Walke" },
                "This is *another* comment"
            )
        );
    }
});
var CommentForm = React.createClass({
    displayName: "CommentForm",

    render: function render() {
        return React.createElement(
            "div",
            { className: "commentForm" },
            "Hello, world! I am a CommentForm."
        );
    }
});
var CommentBox = React.createClass({
    displayName: "CommentBox",

    render: function render() {
        return React.createElement(
            "div",
            { className: "commentBox" },
            React.createElement(
                "h1",
                null,
                "Comments"
            ),
            React.createElement(CommentList, null),
            React.createElement(CommentForm, null)
        );
    }
});
ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('content'));