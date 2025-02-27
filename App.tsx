import { useState } from 'react';
import Login from './src/Login';
import Home from './src/Home';
import LaunchDarklyProvider from './src/launch-darkly/provider';

const Main = () => {
  const [currentRoute, setCurrentRoute] = useState('login');

  return (
    <LaunchDarklyProvider>
      {
        <>
          {currentRoute === 'login' && <Login onCurrentRouteChange={setCurrentRoute} />}
          {currentRoute === 'home' && <Home onCurrentRouteChange={setCurrentRoute} />}
        </>
      }
    </LaunchDarklyProvider>
  );
};

export default Main;
