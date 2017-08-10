//TODO: import API from instagram


//less React Boilerplate and more JS than React.createClass



class InstagramImage extends React.Component {
    render() {
        return (
            //getting the value from imageUrl/imageTitle from the InstagramFeed class
            <figure>
                <img src="{this.props.imageUrl}" alt="{this.props.imageTitle}" />
                <figcaption>Some text here <button type="button" onClick={this._handleClick} >Click here</button></figcaption>
            </figure>
        );
    };
};

class InstagramFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            clientID: '	8b12ed9c9aaa49a8bb9e9e2faad6a413' //Client ID for de_focking_masters account
        };
    }
    renderImage(i) {
        return <InstagramImage imageTitle={i} />
    }
    render() {
        return (
            <div>
                <h1>Meanwhile on Instagram</h1>
                {this.renderImage('awesomesauce')}
            </div>
        );
    };
};