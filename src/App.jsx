import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import RecipeListPage from './pages/RecipeListPage.jsx'
import RecipeDetailPage from './pages/RecipeDetailPage.jsx'
import AddRecipePage from './pages/AddRecipePage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import { useTheme } from './context/ThemeContext.jsx'

function App() {
  const { theme, toggleTheme } = useTheme()

  // TODO (Câu 9): Lấy user từ Recoil để hiển thị tên + nút Logout trên navbar
  // TODO (Câu 10): Bọc /add và /favorites bằng ProtectedRoute

  return (
    <>
      <nav className="navbar">
        <h1>🍳 RECIPE BOOK</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NavLink to="/" end>Trang chủ</NavLink>
          <NavLink to="/recipes">Công thức</NavLink>
          <NavLink to="/favorites">Yêu thích</NavLink>
          <NavLink to="/add">Thêm mới</NavLink>
          <NavLink to="/login">Đăng nhập</NavLink>
          {/* TODO (Câu 9): Khi đã login, ẩn link Đăng nhập, hiện "Xin chào, {username}" + nút Logout */}

          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Sáng' : '🌙 Tối'}
          </button>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipeListPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
