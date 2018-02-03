import styles from './Header.css';
import {connect} from 'react-redux';
import {searchState, pageState, postAction, timelineDataAdd} from 'actions';
import DB from 'utils/DB';

@connect(state => ({
  searchState: state.searchState.state,
  value: state.postAction.value,
  postState: state.postState,
}), {
  searchState,
  pageState,
  postAction,
  timelineDataAdd,
})
@CSSModules(styles)
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.onCancel = this.onCancel.bind(this);
    this.onPost = this.onPost.bind(this);
    this.db = new DB();
  }

  onPost() {
    if (this.props.value !== '') {
      console.log('post!', this.props.value, this.props.postState);
      this.db.addPost(this.props.postState);
      // this.props.timelineDataAdd(this.props.postState);
      this.props.pageState('home');
      this.props.postAction('');
    }
  }

  onCancel() {
    this.props.pageState('home');
  }

  render() {
    let postable = { color: "#CFCFCF" };
    if (this.props.value !== '') {
      postable = {};
    }

    return (
      <div styleName="header">
        <div styleName="cancel">
          <button onClick={this.onCancel}>
            <i className="material-icons">clear</i>
          </button>
        </div>
        <div styleName="post">
          <button style={postable} onClick={this.onPost}>Post</button>
        </div>
      </div>
    );
  }
}
