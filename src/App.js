import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

//import Component
import RegisterPage from "../src/Pages/register.jsx";
import LoginPage from "../src/Pages/login.jsx"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
