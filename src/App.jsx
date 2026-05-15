import { useEffect } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import HomePage from './pages/HomePage.jsx'
import RecipeListPage from './pages/RecipeListPage.jsx'
import RecipeDetailPage from './pages/RecipeDetailPage.jsx'
import AddRecipePage from './pages/AddRecipePage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import { useTheme } from './context/ThemeContext.jsx'
import { userState } from './store/atoms.js'
import { useLocalStorage } from './hooks/useLocalStorage.js'

// Câu 10: ProtectedRoute – chưa đăng nhập thì chuyển hướng về /login
function ProtectedRoute({ children }) {
  const [user] = useRecoilState(userState)
  if (!user) return <Navigate to="/login" replace />
  return children
}

function App() {
  const { theme, toggleTheme } = useTheme()
  const [user, setUser] = useRecoilState(userState)
  const [savedUser, setSavedUser] = useLocalStorage('user', null)

  // Câu 9: Khi reload trang, khôi phục user từ localStorage vào Recoil
  useEffect(() => {
    if (savedUser && !user) {
      setUser(savedUser)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogout = () => {
    setUser(null)
    setSavedUser(null)
  }

  return (
    <>
      <nav className="navbar">
        <h1>🍳 RECIPE BOOK</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NavLink to="/" end>Trang chủ</NavLink>
          <NavLink to="/recipes">Công thức</NavLink>
          <NavLink to="/favorites">Yêu thích</NavLink>
          <NavLink to="/add">Thêm mới</NavLink>
          {/* Câu 9: Ẩn link Đăng nhập khi đã login, hiện tên user + nút Logout */}
          {user ? (
            <>
              <span style={{ marginLeft: 8, marginRight: 4 }}>Xin chào, {user.username}</span>
              <button className="btn btn-ghost" onClick={handleLogout}>Đăng xuất</button>
            </>
          ) : (
            <NavLink to="/login">Đăng nhập</NavLink>
          )}

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
          {/* Câu 10: Bọc /favorites và /add bằng ProtectedRoute */}
          <Route path="/favorites" element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
          <Route path="/add" element={<ProtectedRoute><AddRecipePage /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
