import { Content, Navbar, Brand } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Brand className="brand" />
        <Navbar />
      </header>
      <Content />
    </div>
  );
};

export default App;
