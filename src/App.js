import './App.css';
import Task from './components/form/Task'
import LayoutPage from "./pages/LayoutPage"

function App() {
  return (
    <div className="App">

      <LayoutPage>
        <Task/>
      </LayoutPage>

      {/* <Header/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <section>
        <Sidebar/>
        <Task />
      </section> */}      
    </div>
  );
}

export default App;
