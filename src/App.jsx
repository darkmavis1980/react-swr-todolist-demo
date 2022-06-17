import { Suspense } from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

import './App.css'

function App() {
  return (
    <div className="App">
      <InputField />
      <Suspense fallback={<p>Loading list</p>}>
        <TodoList />
      </Suspense>
    </div>
  )
}

export default App;
