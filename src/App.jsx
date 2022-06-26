import { Suspense } from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

import './App.css'

function App() {
  return (
    <div className="container">
      <div className="todo">
        <InputField />
        <Suspense fallback={<p>Loading list</p>}>
          <TodoList />
        </Suspense>
      </div>
    </div>
  )
}

export default App;
