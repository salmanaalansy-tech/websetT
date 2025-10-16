import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* ✅ BrowserRouter: يغلّف المشروع لتفعيل نظام التوجيه */}
      <BrowserRouter>
        {/* ✅ Header: يظهر في جميع الصفحات */}
        <Header /> 

        {/* ✅ Routes: تحتوي جميع المسارات */}
        <Routes>
          {/* ✅ Route: يعرّف مسار معين وعناصره */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
