import { useRef, useEffect } from 'react'

function SearchBox({ value, onChange }) {
  const inputRef = useRef(null)

  // TODO (Câu 1): Dùng useRef + useEffect để focus input khi component mount
  useEffect(() => {
    // SV viết code ở đây
  }, [])

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="🔍 Tìm theo tên món..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ flex: 1, minWidth: 220 }}
    />
  )
}

export default SearchBox
