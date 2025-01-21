import "./assets/css/index.css";
import Landing from "./pages/landing";
import Layout from "./components/layout";
import Hero from "./components/landing/hero";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
    
  );
}

export default App;
