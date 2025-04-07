import { Loader } from './components/Loader';

import './App.scss';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <div data-cy="app">
    {/* <NavBar /> */}

    <main className="section">
      <div className="container">
        <Outlet />



      </div>
    </main>
  </div>
);
