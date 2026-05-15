import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { recipesState } from '../store/atoms'

function HomePage() {
  const recipes = useRecoilValue(recipesState)

  // TODO (Câu 6): Dùng useMemo để tính:
  //   - total       : tổng số công thức
  //   - easy        : số công thức độ khó 'easy'
  //   - medium      : số công thức độ khó 'medium'
  //   - hard        : số công thức độ khó 'hard'
  //   - favoriteCount : số công thức có favorite === true
  //   - avgCookTime : thời gian nấu trung bình (làm tròn nguyên), 0 nếu chưa có công thức nào
  //
  // Dùng useMemo ở đây hợp lý vì các giá trị thống kê chỉ cần tính lại khi `recipes` thay đổi.
  // Nếu không dùng useMemo, mỗi lần component re-render (dù recipes không đổi) đều tính lại
  // toàn bộ mảng, gây lãng phí hiệu năng khi danh sách công thức lớn.
  const stats = useMemo(() => {
    const total = recipes.length
    if (total === 0) return { total: 0, easy: 0, medium: 0, hard: 0, favoriteCount: 0, avgCookTime: 0 }
    const easy = recipes.filter((r) => r.difficulty === 'easy').length
    const medium = recipes.filter((r) => r.difficulty === 'medium').length
    const hard = recipes.filter((r) => r.difficulty === 'hard').length
    const favoriteCount = recipes.filter((r) => r.favorite === true).length
    const avgCookTime = Math.round(recipes.reduce((sum, r) => sum + (r.cookTime || 0), 0) / total)
    return { total, easy, medium, hard, favoriteCount, avgCookTime }
  }, [recipes])

  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>👨‍🍳 Sổ tay công thức của tôi</h2>

      <div className="stats">
        <div className="stat-box">
          <div className="num">{stats.total}</div>
          <div className="label">Tổng công thức</div>
        </div>
        <div className="stat-box">
          <div className="num" style={{ color: '#16a34a' }}>{stats.easy}</div>
          <div className="label">Dễ</div>
        </div>
        <div className="stat-box">
          <div className="num" style={{ color: '#f59e0b' }}>{stats.medium}</div>
          <div className="label">Trung bình</div>
        </div>
        <div className="stat-box">
          <div className="num" style={{ color: '#dc2626' }}>{stats.hard}</div>
          <div className="label">Khó</div>
        </div>
      </div>

      <div className="card">
        <h3>❤️ Yêu thích: <span style={{ color: '#ec4899' }}>{stats.favoriteCount}</span> công thức</h3>
        <h3 style={{ marginTop: 10 }}>⏱ Thời gian nấu trung bình: <span style={{ color: 'var(--primary)' }}>{stats.avgCookTime}</span> phút</h3>
      </div>
    </div>
  )
}

export default HomePage
