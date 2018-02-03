import Button from 'material-ui/Button';
import styles from './Contents.css';
import Sotify from '../utils/spotify';
import {connect} from 'react-redux';


@connect(state => ({
  timeline: state.timelineData.data,
}), null)
@CSSModules(styles)
export default class Contents extends React.Component {
  constructor(props) {
    super(props);
    this.spotify = new Sotify();
    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onClickEvent(e, type, payload) {
    switch (type) {
      case 'play':
        this.spotify.play(payload);
        break;
    
      default:
        break;
    }
  }

  render() {
    const lineMaker = (key, payload) => {
      const { message, image, id } = payload;
      return (
        <div key={key} styleName="contents">
          <div styleName="line">
            <div styleName="coverImage">
              <Button style={{ padding: 0 }} onClick={(e) => { this.onClickEvent(e, 'play', id) }}>
                <img src={image} />
              </Button>
            </div>
            <div styleName="message">
              <p>{message}</p>
            </div>
          </div>
        </div>
      )
    };

    let lineContsts = [];
    this.props.timeline.forEach((elem, index, array) => {
      lineContsts.push(lineMaker(index, elem));
    });

    return (
      <div>
        {lineContsts}
      </div>
    );
  }
}
