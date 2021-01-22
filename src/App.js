import "./App.css";
import { Router } from "@reach/router";

import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <section className="App">
      <Navbar />

      <Router>
        <HomePage path="/" />
        <MapPage path="/map" />
      </Router>
    </section>
  );
}

export default App;
