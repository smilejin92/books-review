import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signin from './pages/Signin.jsx';
import NotFound from './pages/NotFound.jsx';
import MyBooks from './pages/MyBooks.jsx';
import ErrorBoundary from 'react-error-boundary';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const ErrorFallbackComponent = ({ error }) => <div>{error.message}</div>;
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

const App = () => (
  <Provider store={store}>
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
