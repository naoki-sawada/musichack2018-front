import {connect} from 'react-redux';
import styles from './Main.css';
import Test from './Test';
import Header from './Header';
import Contents from './Contents';
import Nav from './Nav';
import SearchHeader from './Search/SearchHeader';
import SearchContents from './Search/SearchContents';
import AddPostContents from './AddPost/Contents';
import RadioContents from './Radio/Contents';
import RadioHeader from './Radio/Header';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

@connect(state => ({
  page: state.pageState.nowPage,
}), null)
@CSSModules(styles)
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let contentsArea = null;
    switch (this.props.page) {
      case 'home':
        contentsArea = (
          <div styleName="main">
            <Header />
            <div styleName="headerBK"/>
            <Contents />
            <div styleName="navBK" />
            <Nav />
          </div>
        );
        break;

      case 'search':
        contentsArea = (
          <div styleName="main">
            <SearchHeader />
            <div styleName="searchBK"/>
            <SearchContents />
            <div styleName="navBK" />
            <Nav />
          </div>
        );
        break;

      case 'add':
        contentsArea = (
          <div styleName="main">
            {/* <Header />
            <div styleName="headerBK"/>
            <Contents /> */}
            <AddPostContents />
            {/* <div styleName="navBK" /> */}
            {/* <Nav /> */}
          </div>
        );
        break;

      case 'rss_feed':
        contentsArea = (
          <div styleName="main">
            <RadioHeader />
            <div styleName="headerBK"/>
            <RadioContents />
            <div styleName="navBK" />
            <Nav />
          </div>
        );
        break;
    
      default:
        // contentsArea = (
        //   <div styleName="main">
        //     <Header />
        //     <div styleName="headerBK"/>
        //     <Contents />
        //     <div styleName="navBK" />
        //     <Nav />
        //   </div>
        // );
        break;
    }
    

    return contentsArea;
  }
}
