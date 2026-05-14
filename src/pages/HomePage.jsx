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
  const stats = useMemo(() => {
    // SV viết code ở đây
    return { total: 0, easy: 0, medium: 0, hard: 0, favoriteCount: 0, avgCookTime: 0 }
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
