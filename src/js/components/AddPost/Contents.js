import Button from 'material-ui/Button';
import styles from './Contents.css';
import {connect} from 'react-redux';
import {postAction} from 'actions';
import Anime from 'react-anime';
import Header from './Header';
import Sotify from 'utils/spotify';

@connect(state => ({
  searchState: state.searchState.state,
  value: state.postAction.value,
}), {
  postAction,
})
@CSSModules(styles)
export default class SearchContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artist: '', track: '', title: '', img: null, id: '' };
    this.spotify = new Sotify();
    this.handleChange = this.handleChange.bind(this);
    this.getSpotify = this.getSpotify.bind(this);
  }

  handleChange(event) {
    this.props.postAction(event.target.value);
  }

  getSpotify() {
    this.spotify.getNowPlay((res) => {
      console.log(res);
      this.setState({ img: res.data.item.album.images[0].url });
      this.setState({ title: res.data.item.name });
      this.setState({ artist: res.data.item.album.artists[0].name });
      this.setState({ album: res.data.item.album.name });
      this.setState({ id: res.data.item.uri });
    });
  }

  componentDidMount() {
    this.getSpotify();
  }

  render() {
    return (
      <div styleName="post">
        <Header />
        <div styleName="body">
          <div styleName="songInfo">
            <div styleName="imageArea">
              <img src={this.state.img} />
            </div>
            <div styleName="infoArea">
              <div>Title: {this.state.title}</div>
              <div>Artist: {this.state.artist}</div>
              <div>Album: {this.state.album}</div>
            </div>
          </div>
          <div styleName="inputArea">
            <textarea
              styleName="inputText"
              value={this.props.value}
              onChange={this.handleChange}
              placeholder="メッセージを入力" />
          </div>
        </div>
      </div>
    );
  }
}
