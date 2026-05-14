import { useRef, useEffect } from 'react'

function SearchBox({ value, onChange }) {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
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
