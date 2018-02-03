import Main from './components/Main';
import { Provider } from 'react-redux';
import configureStore from './store';
import { initial } from './reducers';

ReactDOM.render(
  <Provider store={configureStore(initial)}>
    <Main />
  </Provider>,
  document.getElementById('main')
);
