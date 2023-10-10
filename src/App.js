import './App.css';
import CreateForm from './CreateForm';
import ToDo from './ToDo';
import ToDoList from './ToDoList';
import { useToDoContents } from './hooks/useToDoContents';

function App() {
  const { toDoContents, setToDoContents } = useToDoContents();

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <CreateForm toDoContents={toDoContents} setToDoContents={setToDoContents} />
      <ToDoList>
        {toDoContents.length ? toDoContents.map((item, index) => (
          <ToDo
            key={index}
            index={index}
            text={item}
            toDoContents={toDoContents}
            setToDoContents={setToDoContents}
          />
        )) : (
          <p className='no-to-do-message'>ToDoはまだありません。</p>
        )}
      </ToDoList>
    </div>
  );
}

export default App;