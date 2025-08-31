
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home"
import { useStore } from "./Context/AppContext";

function App() {

  const {darkMode} = useStore()
 
  return (
    <Router>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound darkMode={darkMode} />} />
        </Routes>

    </Router>
  );
}

export default App;