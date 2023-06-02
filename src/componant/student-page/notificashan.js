import React from 'react';
import Notification from './Notification';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Notification message="This is a notification message." type="success" />
    </div>
  );
};

export default App;
