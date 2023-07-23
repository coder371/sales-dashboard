import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'

import { Provider } from 'react-redux';
import {store} from './app/store.ts';
import apolloClient from './apolloClient.tsx'
import './index.css'
import { ApolloProvider } from '@apollo/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Provider>
)
