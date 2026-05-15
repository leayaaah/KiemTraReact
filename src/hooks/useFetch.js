import { useState, useEffect, useCallback, useRef } from 'react'

// TODO (Câu 4): Hoàn thiện custom hook useFetch
// Mục đích: gói gọn việc gọi API + quản lý trạng thái loading/error/data.
// Cách dùng:
//   const { data, loading, error, refetch } = useFetch(getRecipes)
//
// Yêu cầu:
//   - Nhận vào: fetcher (1 hàm async, ví dụ getRecipes), deps (mảng dependencies, mặc định [])
//   - State: data (mặc định null), loading (mặc định true), error (mặc định null)
//   - Khi mount (và khi deps thay đổi): set loading = true, gọi fetcher(),
//       thành công -> setData, setLoading(false)
//       thất bại  -> setError, setLoading(false)
//   - Trả về { data, loading, error, refetch }
//       refetch: hàm cho phép gọi lại fetcher để load lại dữ liệu
export function useFetch(fetcher, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const fetcherRef = useRef(fetcher)

  useEffect(() => {
    fetcherRef.current = fetcher
  }, [fetcher])

  const runFetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetcherRef.current()
      setData(result)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    runFetch()
  }, [runFetch, ...deps])

  return { data, loading, error, refetch: runFetch }
}
