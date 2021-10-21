import React from 'react';
import Lottery from './components/Lottery/lottery.component';

const App = () => {
  return (
    <div>
      <Lottery />
      <Lottery title="mini lotto" numBalls={4} maxNum={10} />
    </div>
  );
};

export default App;
