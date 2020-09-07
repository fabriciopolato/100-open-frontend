import React from 'react';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => (
    <Router>
        <Routes />
    </Router>
);

export default App;
