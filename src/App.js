import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signin from './pages/Signin.jsx';
import NotFound from './pages/NotFound.jsx';
import MyBooks from './pages/MyBooks.jsx';
import ErrorBoundary from 'react-error-boundary';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const ErrorFallbackComponent = ({ error }) => <div>{error.message}</div>;

const App = () => (
  <Provider
    store={createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    )}
  >
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/myBooks" component={MyBooks} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>
);

export default App;
