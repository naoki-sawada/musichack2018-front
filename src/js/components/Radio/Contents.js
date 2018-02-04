import Button from 'material-ui/Button';
import styles from './Contents.css';
import Sotify from '../../utils/spotify';
import { colors } from 'material-ui';


const homeContents = [
  { message: 'カレー食べてます🍛', image: 'http://i.scdn.co/image/2e0dc2302c29987233abe75051836cbc716b8e72', id: 'spotify:track:6871FKHumiy1Wfr6vF7Xxt' },
  { message: 'この曲好き！', image: 'http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1', id: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr' },
  { message: '通学路で聴いてます！', image: 'https://i.scdn.co/image/c5864968f30c3c7298a403b0d2c8d652a0d7c039', id: 'spotify:album:5bMtF0QUf1rKcoqOvpBEBE' },
  { message: 'かっこいいなあ', image: 'https://i.scdn.co/image/f2155133a2d08d50f2d9e84bf3fc2e1d28210c82', id: 'spotify:album:2QBJu1rJWSPtTiWxwIY2H7' },
  { message: 'これ、おすすめ！', image: 'https://i.scdn.co/image/7c3ec33d478f5f517eeb5339c2f75f150e4d601e', id: 'spotify:album:4OHNH3sDzIxnmUADXzv2kT' },
  { message: '永遠の名曲だよな。', image: 'https://i.scdn.co/image/7c9d2b8dab447da632caccd259bae20f605e4b02', id: 'spotify:album:3a5aKQqcG1rTAUcs3qYFda' },
  { message: '最近、ハマってる', image: 'https://i.scdn.co/image/ac1c30bff38ad98165671c933b6279a6cd6885e1', id: 'spotify:album:64ZJtdPNj5HqXCsT1MHokY' },
  { message: '落ち着きたい時によくかける曲です', image: 'https://i.scdn.co/image/21d4f9be39f28ba3295efa2a597353cb812dec81', id: 'spotify:album:5TgzfNr91dbdvZWC0dRldi' },
];


@CSSModules(styles)
export default class Contents extends React.Component {
  constructor(props) {
    super(props);
    this.spotify = new Sotify();
    this.state = { num: 0 };
    this.onClickEvent = this.onClickEvent.bind(this);
    this.evnetAdd = this.evnetAdd.bind(this);
  }

  evnetAdd(num) {
    this.interval = setInterval(()=> {
      this.setState({ num: this.state.num + 1 });
      if (this.state.num < homeContents.length) {
        this.spotify.voice(homeContents[this.state.num].message, () => {
          new Audio('http://localhost:9999/test.mp3').play();
        });
        this.spotify.play(homeContents[this.state.num].id );
      } else {
        this.componentWillUnmount();
      }
    }, 15 * 1000);
  }

  onClickEvent(e, type, payload, text, num) {
    console.log(payload)
    switch (type) {
      case 'play':
        this.spotify.voice(text, () => {
          new Audio('http://localhost:9999/test.mp3').play();
        });
        this.spotify.play(payload);
        this.componentWillUnmount();
        this.setState({ num });
        this.evnetAdd(num);
        break;

      default:
        break;
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
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
              <Button style={{ padding: 0 }} onClick={(e) => { this.onClickEvent(e, 'play', id, message, key) }}>
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
      if (this.state.num == index) {
        lineContsts.push(lineMaker(index, elem, true));
      } else {
        lineContsts.push(lineMaker(index, elem));
      }
    });

    return (
      <div>
        {/* <div styleName="title">公開されたラジオ</div> */}
        {lineContsts}
      </div>
    );
  }
}
