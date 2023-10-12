import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import awsconfig from './aws-exports';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
  headers: {
    'x-api-key': awsconfig.aws_appsync_apiKey,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
