import { memo } from 'react'

// TODO (Câu 1): Trong file này SV cần viết comment trả lời 2 ý:
//   1. Liệt kê các props mà RecipeCard nhận.
//   2. Giải thích vì sao bọc bằng React.memo lại cần thiết khi có nhiều card.
//      Khi nào memo KHÔNG có tác dụng?

function RecipeCard({ recipe, onView, onDelete }) {
  const diffMap = {
    easy:   { label: 'Dễ',          className: 'badge-easy' },
    medium: { label: 'Trung bình',  className: 'badge-medium' },
    hard:   { label: 'Khó',         className: 'badge-hard' },
  }
  const diff = diffMap[recipe.difficulty] || diffMap.medium

  return (
    <div className="recipe-card">
      <div className="recipe-image" onClick={onView} style={{ cursor: 'pointer' }}>
        {recipe.image
          ? <img src={recipe.image} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : '🍲'}
      </div>
      <div className="recipe-info">
        <h3 onClick={onView} style={{ cursor: 'pointer' }}>{recipe.title}</h3>
        <p>⏱ {recipe.cookTime} phút • 🍽 {recipe.servings} người</p>

        <div style={{ marginTop: 4 }}>
          <span className={`badge ${diff.className}`}>{diff.label}</span>
          {recipe.favorite && <span className="badge badge-fav">❤ Yêu thích</span>}
        </div>

        <div style={{ marginTop: 12, display: 'flex', gap: 6 }}>
          <button className="btn btn-ghost" onClick={onView}>Chi tiết</button>
          <button className="btn btn-danger" onClick={() => onDelete(recipe.id)}>Xóa</button>
        </div>
      </div>
    </div>
  )
}

export default memo(RecipeCard)
