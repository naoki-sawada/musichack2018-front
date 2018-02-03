import Button from 'material-ui/Button';
import styles from './Contents.css';

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

@CSSModules(styles)
export default class Contents extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickEvent(e, type) {
    console.log('aaaaaaaaaaaaaaaaaaaa');
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
              <Button style={{ padding: 0 }} onClick={(e) => { this.onClickEvent(e, null) }}>
                <img src="http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1" />
              </Button>
              {/* <button onClick={(e) => { this.onClickEvent(e, null) }}>
                <img src="http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1" />
              </button> */}
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
