import React from 'react';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { thunk } from 'redux-thunk';

import reducer from 'store/reducer';

import Controls from './controls';
import Field from './field';

import './styles.css';

class App extends React.Component {

  constructor(props) {
    super(props);


    const state = {
    };

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    this.store = createStore(
      reducer,
      state,
      composeEnhancers(applyMiddleware(thunk))
    );
  }

  render() {
    return <Provider store={this.store}>
      <div className="outer-container">
        <Controls />
        <Field />
      </div>
    </Provider>
  }

};

export default App;