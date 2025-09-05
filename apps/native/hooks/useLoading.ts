import { useState, useCallback } from "react"

const useLoading = (init = false) => {
  const [isLoading, setIsLoading] = useState(init)

  const onLoadingStart = useCallback(() => {
    setIsLoading(true)
  }, [])

  const onLoadingEnd = useCallback(() => {
    setIsLoading(false)
  }, [])

  return { isLoading, onLoadingStart, onLoadingEnd }
}

export { useLoading }
