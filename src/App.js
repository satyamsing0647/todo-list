import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coforge My Task Application !!</h1>
      </header>

      <TodoList></TodoList>

    </div>
  );
}

export default App;
