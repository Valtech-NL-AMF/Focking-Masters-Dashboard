let data = [
    { id: 1, author: "Daniel Lo Nigro", text: "Hello ReactJS.NET World!" },
    { id: 2, author: "Pete Hunt", text: "This is one comment" },
    { id: 3, author: "Jordan Walke", text: "This is *another* comment" }
];

class Comment extends React.Component{
    rawMarkup() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    }
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
};
class CommentList extends React.Component{
    render() {
        let commentNodes = this.props.data.map((comment) => {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
};
class CommentForm extends React.Component{
    render() {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
};
class CommentBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = { data: [] };
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        }.bind(this);
        xhr.send();
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
};
ReactDOM.render(
    <CommentBox url="/comments" />,
    document.getElementById('content')
);