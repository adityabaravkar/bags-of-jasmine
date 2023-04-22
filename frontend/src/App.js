import { Content, Navbar } from "./components";
import "./App.css";

import { ReactComponent as Brand } from "./assets/brand-en.svg";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Brand className="brand" />
        <Navbar />
      </header>
      <Content />
    </div>
  );
}

export default App;
