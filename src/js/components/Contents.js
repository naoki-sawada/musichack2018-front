import Button from 'material-ui/Button';
import styles from './Contents.css';
import Sotify from '../utils/spotify';

const message = [
  'この曲めっちゃ元気でる',
  'わーい。',
  '勉強の時にかけてます',
  'この曲めっちゃ元気でるaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbaaaaaaaaaaaaaaaaaa',
  'わーい。',
  '勉強の時にかけてます',
  'この曲めっちゃ元気でる',
  'わーい。',
  '勉強の時にかけてます',
  'この曲めっちゃ元気でる',
  'わーい。',
  '勉強の時にかけてます',
];

const playlist = [
  'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr',
  'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr',
  'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr',
  'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr',
  'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr',
  'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr',
  'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr',
  'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr',
  'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr',
  'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr',
]

@CSSModules(styles)
export default class Contents extends React.Component {
  constructor(props) {
    super(props);
    this.spotify = new Sotify();
    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onClickEvent(e, type, payload) {
    // console.log('aaaaaaaaaaaaaaaaaaaa');
    switch (type) {
      case 'play':
        // this.spotify.play("spotify:album:5ht7ItJgpBH7W6vJ5BqpPr");
        this.spotify.play(payload);
        break;
    
      default:
        break;
    }
  }

  render() {
    let line = null;
    line = (
      <div styleName="line">
        <div styleName="coverImage">
          イメージだよ
        </div>
        <div styleName="message">
          あああああああ
        </div>
      </div>
    );
    const lineMaker = (key, image, message) => {
      return (
        <div key={key} styleName="contents">
          <div styleName="line">
            <div styleName="coverImage">
              <Button style={{ padding: 0 }} onClick={(e) => { this.onClickEvent(e, 'play', playlist[key]) }}>
                <img src="http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1" />
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
    for (let i = 0; i < 10; i++) {
      lineContsts.push(lineMaker(i, null, message[i]));
    }

    return (
      <div>
        {lineContsts}
      </div>
    );
  }
}
