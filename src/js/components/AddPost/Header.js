import styles from './Header.css';
import {connect} from 'react-redux';
import {searchState, pageState, postAction} from 'actions';

@connect(state => ({
  searchState: state.searchState.state,
  value: state.postAction.value,
}), {
  searchState,
  pageState,
  postAction,
})
@CSSModules(styles)
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onPost = this.onPost.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  keyPress(event) {
    if(event.key == 'Enter'){
      console.log('enter press here! ');
      // this.props.searchState();
    }
  }

  onPost() {
    if (this.props.value !== '') {
      console.log('post!', this.props.value);
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
