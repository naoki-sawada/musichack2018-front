import {connect} from 'react-redux';
import styles from './Nav.css';
import {pageState} from '../actions';

@connect(state => ({
  page: state.pageState.nowPage,
}), {
  pageState,
})
@CSSModules(styles)
export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navState: 'home' };
  }

  onNavAction(e, type) {
    this.props.pageState(type);
  }

  render() {
    const iconNameList = ['home', 'search', 'add', 'rss_feed', 'account_circle'];

    let navContents = [];
    iconNameList.forEach((elem, index, array) => {
      let styleType = {};
      if (this.props.page === elem) {
        styleType = {color: '#272727'};
      }
      navContents.push(
        <div key={index} styleName="navButton">
          <button onClick={(e) => this.onNavAction(e, elem)}>
            <i style={styleType} className="material-icons">{elem}</i>
          </button>
        </div>
      );
    });

    return (
      <div styleName="nav">
        {navContents}
      </div>
    );
  }
}
