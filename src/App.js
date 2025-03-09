import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerQueue from "./pages/CustomerQueue";
import TrackRepair from "./pages/TrackRepair";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerQueue />} />
        <Route path="/track/:id" element={<TrackRepair />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;