import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Background from './components/Background';
import Home from './views/Home';
import Launch from './views/Launch';
import Launches from './views/Launches';
import './App.scss';

const client = new ApolloClient({
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Background />
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/launches" exact component={Launches} />
          <Route path="/launch/:flight_number" exact component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
