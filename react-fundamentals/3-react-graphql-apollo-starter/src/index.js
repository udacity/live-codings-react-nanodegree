import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cizt2ung1yd0z01279dwyobe7'}),
  cache: new InMemoryCache(),
})

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    , document.getElementById('root'));
registerServiceWorker();
