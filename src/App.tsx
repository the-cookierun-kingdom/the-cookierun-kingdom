import React from 'react';
import { AppNavbar } from './features/app/AppNavbar';
import { CoolTime } from './features/coolTime/CoolTime';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <CoolTime />
    </div>
  );
}

export default App;
