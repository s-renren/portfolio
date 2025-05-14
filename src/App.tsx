import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Works from "./pages/Works/Works";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/works/" element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;
