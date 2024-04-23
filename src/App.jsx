import { Parent } from './components/Parent';
import { PersonProvider } from './context/PersonContext';

function App() {
  return (
    <PersonProvider>
      <Parent />
    </PersonProvider>
  );
}

export default App;
