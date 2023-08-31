import Detail from 'pages/Detail';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
      <Route path="/*" element={<Navigate to="/error" />} />
      <Route path="/error" element={<NotFound />} />
    </Routes>
  );
}
