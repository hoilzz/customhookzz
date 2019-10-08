import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { IOEx } from './components/IO';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/examples/io" component={IOEx} />
      </Router>
    </div>
  );
};

export default App;
