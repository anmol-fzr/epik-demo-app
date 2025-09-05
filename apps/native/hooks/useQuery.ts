import { useState, useCallback, useRef, useEffect } from "react"
import { useLoading } from "./useLoading"

const useQuery = (fn: () => Promise<Response>) => {
  const { isLoading, onLoadingStart, onLoadingEnd } = useLoading()
  const [data, setData] = useState<null>(null)
  const fnRef = useRef(fn)

  useEffect(() => {
    fnRef.current = fn
  }, [fn])

  const fetchData = useCallback(async () => {
    onLoadingStart()
    const resp = await (() => fnRef.current())()
    const json = await resp.json()
    onLoadingEnd()
    setData(json)
    return json
  }, [fn])

  return { data, isLoading, fetchData }
}

export { useQuery }
