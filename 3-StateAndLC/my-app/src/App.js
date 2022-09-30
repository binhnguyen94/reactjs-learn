
import './App.css';
import Authen from './components/Authen';
import Calculator from './components/Calculator';
import ConditionalRendering from './components/ConditionalRendering';
import Login from './components/Login';
import ManageStudent from './components/ManageStudent';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      {/* <ConditionalRendering /> */}
      {/* <Calculator /> */}
      {/* <Login /> */}
      {/* <Todo /> */}
      <ManageStudent />
    </div>
  );
}

export default App;
