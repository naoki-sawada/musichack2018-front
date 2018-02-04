import Button from 'material-ui/Button';
import styles from './Contents.css';
import Sotify from '../../utils/spotify';
import { colors } from 'material-ui';

const homeContents = [
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
        {lineContsts}
      </div>
    );
  }
}
https://open.spotify.com/track/4dFXu3u2hTk2cfVjK2IGRX
https://open.spotify.com/track/04JL2liXXV9B9coeGuUsPw
https://open.spotify.com/track/5TOSXYdmL0g0cjgS5EmERP
https://open.spotify.com/track/2dQ4alICWrgs9gyYUOWlEg
https://open.spotify.com/track/1zNNR1sQvk2W55jqweXFiX
https://open.spotify.com/track/4HFqtbl5D5gJhtjnGRhGgY
