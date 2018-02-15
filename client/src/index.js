import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import GameDetail from './GameDetail';

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/g/:id" component={GameDetail} />
        </div>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
