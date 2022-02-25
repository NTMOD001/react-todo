import './App.css';
import Header from './components/Header';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState } from 'react';


function App() {

  const [todoList, setTodoList] = useState(
    [
      { text: 'first task' },
      { text: 'second task' },
      { text: 'third task' },
    ]
  )

  return (
    <div className='fill-window'>
      <div className='center'>
        <div className='field'>
          <Card >
            <CardContent>
              <Header />
              {/* input */}
              <AddTodo />
            </CardContent>
            <TodoList list={todoList}/>
          </Card>
        </div>
      </div>
    </div >
  );
}

export default App;
