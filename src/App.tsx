import Message from './components/navbar';
import { Button } from './components/ui/button';

const App = () => {
  return (
    <>
      <div>
        <Button>Add me</Button>
      </div>
      <Message />
    </>
  );
};

export default App;
