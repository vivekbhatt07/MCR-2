import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Archives, Detail } from "./Pages";

function App() {
  return (
    <div className="bg-[#aaa]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archives />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
