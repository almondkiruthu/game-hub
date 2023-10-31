import { useState } from 'react';
import { Button } from './ui/button';

const Message = () => {
  const [{}, setCounter] = useState({ counter: number });

  return (
    <div>
      <h1>Let's go {counter}</h1>
      {/* Fix the counter */}
      <Button onClick={setCounter(counter++)}>run</Button>
    </div>
  );
};

export default Message;
