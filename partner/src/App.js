// partner/src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout'; // 가상의 레이아웃 컴포넌트
import Login from './pages/Login';
import Join from './pages/Join';
import Dashboard from './pages/Dashboard';
import Settlement from './pages/Settlement';
import Performance from './pages/Performance';
import ContentList from './pages/ContentList';
import ContentWrite from './pages/ContentWrite';
import CS from './pages/CS';
import StoreManagement from './pages/StoreManagement';

function App() {
  return (
    <Router basename="/lofi/partner">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/c-log" replace />} />
          <Route path="c-log" element={<Login />} />
          <Route path="c-join" element={<Join />} />
          <Route path="c-home-01" element={<Dashboard />} />
          <Route path="c-store-01" element={<StoreManagement />} />
          {/* 여기에 다른 페이지 라우트들을 추가해야 합니다. */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
