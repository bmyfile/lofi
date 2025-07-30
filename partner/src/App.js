// partner/src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/lofi/partner">  {/* ← 깃허브 배포 url */}
      <Routes>
        <Route path="/" element={<PartnerHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}