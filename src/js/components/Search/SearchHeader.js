import styles from './SearchHeader.css';
import {connect} from 'react-redux';
import {searchState} from 'actions';

@connect(state => ({
  searchState: state.searchState.state,
}), {
  searchState,
})
@CSSModules(styles)
export default class SearchHeader extends React.Component {
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
      this.props.searchState();
    }
  }

  render() {
    return (
      <div styleName="header">
        <input
          styleName="inputHolder"
          type="text"
          placeholder="search"
          value={this.state.value}
          onKeyPress={this.keyPress}
          onChange={this.handleChange} />
      </div>
    );
  }
}
