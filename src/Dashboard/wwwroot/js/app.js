"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import { line as LineChart } from 'react-chartjs';

var GoogleAnalytics = function (_React$Component) {
    _inherits(GoogleAnalytics, _React$Component);

    function GoogleAnalytics() {
        _classCallCheck(this, GoogleAnalytics);

        return _possibleConstructorReturn(this, (GoogleAnalytics.__proto__ || Object.getPrototypeOf(GoogleAnalytics)).apply(this, arguments));
    }

    _createClass(GoogleAnalytics, [{
        key: "render",
        value: function render() {
            return React.createElement(Chart, null);
        }
    }]);

    return GoogleAnalytics;
}(React.Component);

;

var Chart = function (_React$Component2) {
    _inherits(Chart, _React$Component2);

    function Chart() {
        _classCallCheck(this, Chart);

        return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments));
    }

    _createClass(Chart, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                null,
                "button man"
            );
        }
    }]);

    return Chart;
}(React.Component);

;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//TODO: import API from instagram


//less React Boilerplate and more JS than React.createClass


var InstagramImage = function (_React$Component) {
    _inherits(InstagramImage, _React$Component);

    function InstagramImage() {
        _classCallCheck(this, InstagramImage);

        return _possibleConstructorReturn(this, (InstagramImage.__proto__ || Object.getPrototypeOf(InstagramImage)).apply(this, arguments));
    }

    _createClass(InstagramImage, [{
        key: "render",
        value: function render() {
            return (
                //getting the value from imageUrl/imageTitle from the InstagramFeed class
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: "{this.props.imageUrl}", alt: "{this.props.imageTitle}" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Some text here ",
                        React.createElement(
                            "button",
                            { type: "button", onClick: this._handleClick },
                            "Click here"
                        )
                    )
                )
            );
        }
    }]);

    return InstagramImage;
}(React.Component);

;

var InstagramFeed = function (_React$Component2) {
    _inherits(InstagramFeed, _React$Component2);

    function InstagramFeed(props) {
        _classCallCheck(this, InstagramFeed);

        var _this2 = _possibleConstructorReturn(this, (InstagramFeed.__proto__ || Object.getPrototypeOf(InstagramFeed)).call(this, props));

        _this2.state = { data: [] };
        return _this2;
    }

    _createClass(InstagramFeed, [{
        key: "renderImage",
        value: function renderImage(i) {
            return React.createElement(InstagramImage, { value: i });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Meanwhile on Instagram"
                ),
                this.renderImage(0)
            );
        }
    }]);

    return InstagramFeed;
}(React.Component);

;
"use strict";
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

    function CommentForm(props) {
        _classCallCheck(this, CommentForm);

        var _this3 = _possibleConstructorReturn(this, (CommentForm.__proto__ || Object.getPrototypeOf(CommentForm)).call(this, props));

        _this3.state = { author: '', text: '' };
        return _this3;
    }

    _createClass(CommentForm, [{
        key: "handleAuthorChange",
        value: function handleAuthorChange(e) {
            this.setState({ author: e.target.value });
        }
    }, {
        key: "handleTextChange",
        value: function handleTextChange(e) {
            this.setState({ text: e.target.value });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var author = this.state.author.trim();
            var text = this.state.text.trim();
            if (!text || !author) {
                return;
            }
            this.props.onCommentSubmit({ author: author, text: text });
            this.setState({ author: '', text: '' });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { className: "commentForm", onSubmit: this.handleSubmit.bind(this) },
                React.createElement("input", {
                    type: "text",
                    placeholder: "Your name",
                    value: this.state.author,
                    onChange: this.handleAuthorChange.bind(this)
                }),
                React.createElement("input", {
                    type: "text",
                    placeholder: "Say something, please...",
                    value: this.state.text,
                    onChange: this.handleTextChange.bind(this)
                }),
                React.createElement("input", { type: "submit", value: "Post" })
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
        return _this4;
    }

    _createClass(CommentBox, [{
        key: "loadCommentsFromServer",
        value: function loadCommentsFromServer() {
            var xhr = new XMLHttpRequest();
            xhr.open('get', this.props.url, true);
            xhr.onload = function () {
                var data = JSON.parse(xhr.responseText);
                this.setState({ data: data });
            }.bind(this);
            xhr.send();
        }
    }, {
        key: "handleCommentSubmit",
        value: function handleCommentSubmit(comment) {
            var comments = this.state.data;
            // Optimistically set an id on the new comment. It will be replaced by an
            // id generated by the server. In a production application you would likely
            // not use Date.now() for this and would have a more robust system in place.
            comment.id = Date.now();
            var newComments = comments.concat([comment]);
            this.setState({ data: newComments });

            var data = new FormData();
            data.append('author', comment.author);
            data.append('text', comment.text);

            var xhr = new XMLHttpRequest();
            xhr.open('post', this.props.submitUrl, true);
            xhr.onload = function () {
                this.loadCommentsFromServer();
            }.bind(this);
            xhr.send(data);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.loadCommentsFromServer();
            window.setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
        }
    }, {
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
                React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit.bind(this) })
            );
        }
    }]);

    return CommentBox;
}(React.Component);

;
//ReactDOM.render(
//    <CommentBox url="/comments" submitUrl="/comments/new" pollInterval={2000} />,
//    document.getElementById('content')
//);