import './App.css';
import Task from './components/task/Task'
import LayoutPage from "./pages/LayoutPage"

function App() {
  return (
    <div className="App">
      <LayoutPage>
        <Task />
      </LayoutPage>
    </div>
  );
}

export default App;
