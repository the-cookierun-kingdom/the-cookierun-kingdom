import React from 'react';
import { AppNavbar } from './features/app/AppNavbar';
import { ControlledComponent } from './features/controlledComponent/ControlledComponent';
import { CoolTime } from './features/coolTime/CoolTime';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <CoolTime />
      <ControlledComponent />
    </div>
  );
}

export default App;
