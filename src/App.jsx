import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodoList from "./TodoList";
function App() {
  return (
    <div className="App">
      <CssBaseline />
      {/* Your other components go here */}
      <h1>Todos</h1>
      <TodoList />
    </div>
  );
}

export default App;
