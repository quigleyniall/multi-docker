import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { OtherPage } from './OtherPage';
import { Fib } from './Fib';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <div>
          <h3>Fib Calculator version 15</h3>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </div>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
};

export default App;
