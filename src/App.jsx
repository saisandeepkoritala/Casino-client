import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BullBlitz from "./games/BullBlitz/BullBlitz";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bullblitz" element={<BullBlitz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
