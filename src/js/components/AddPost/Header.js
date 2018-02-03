import styles from './Header.css';
import {connect} from 'react-redux';
import {searchState} from 'actions';

@connect(state => ({
  searchState: state.searchState.state,
}), {
  searchState,
})
@CSSModules(styles)
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <div styleName="header">
        <div styleName="cancel">
          <i className="material-icons">clear</i>
        </div>
        <div styleName="post">
          <button>Post</button>
        </div>
      </div>
    );
  }
}
