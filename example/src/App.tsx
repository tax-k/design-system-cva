import { Components as Tui } from 'design-system-cva';

function App() {
  return (
    <div className='App'>
      <Tui.Button>Testing 중이에요</Tui.Button>
      <Tui.Button size={'sm'}>Medium</Tui.Button>
      <Tui.Button variant={'destructive'}>Destructive</Tui.Button>
      <Tui.Button variant={'link'}>link</Tui.Button>
      <Tui.Button variant={'ghost'}>Ghost</Tui.Button>
    </div>
  );
}

export default App;
