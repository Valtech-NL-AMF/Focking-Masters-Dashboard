
const ACCESS_TOKEN = '3294651.3ad618f.13120cc0f3474d2eba7a774f29edfe72';

const feedUrl = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}`

const InstagramPost = ({ photos }) => {
    return (
        <div>
            <figure>
                <img src={photo.images.standard_resolution.url} alt="something here"/>
                <figcaption>{photo.caption.text}</figcaption>
            </figure>
        </div>
        )
}

const InstagramFeed = (props) => {
        const InstagramPosts = props.photos.map(photo => {
            return <InstagramPost key={photo.id} photo={photo} />
        });
        return (

            <div data-carousel>
                {InstagramPosts}
            </div>

        )
}

class InstagramApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }
    componentWillMount() {
        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: feedUrl,
            success: instaJson => {
                let photos = instaJson.data;
                this.setState({ photos });
                $('[data-carousel]').slick();
            }
        });

    }

    render() {
        return (
            <InstagramFeed photos={this.state.photos} />
        )
    }

};