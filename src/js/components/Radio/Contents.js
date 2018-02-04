import Button from 'material-ui/Button';
import styles from './Contents.css';
import Sotify from '../../utils/spotify';
import { colors } from 'material-ui';


const homeContents = [
  { message: 'カレー食べてます🍛', image: 'http://i.scdn.co/image/2e0dc2302c29987233abe75051836cbc716b8e72', id: 'spotify:track:6871FKHumiy1Wfr6vF7Xxt' },
  { message: 'この曲好き！', image: 'http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1', id: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr' },
  { message: 'この曲好き！', image: 'http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1', id: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr' },
  { message: 'この曲好き！', image: 'http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1', id: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr' },
  // { message: 'この曲好き！', image: 'http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1', id: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr' },
  // { message: 'この曲好き！', image: 'http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1', id: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr' },
];


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
        this.spotify.voice('カレーを食べるよ', () => {
          new Audio('test.mp3').play();
        });
        break;
    
      default:
        break;
    }
  }

  render() {
    const lineMaker = (key, payload, selected) => {
      const { message, image, id } = payload;
      let contentName = 'contents';
      if (selected) {
        contentName = 'contents-select';
      }
      return (
        <div key={key} styleName={contentName} >
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
    homeContents.forEach((elem, index, array) => {
      if (index == 0) {
        lineContsts.push(lineMaker(index, elem, true));
      } else {
        lineContsts.push(lineMaker(index, elem));
      }
    });

    return (
      <div>
        <div styleName="title">公開されたラジオ</div>
        {lineContsts}
      </div>
    );
  }
}
