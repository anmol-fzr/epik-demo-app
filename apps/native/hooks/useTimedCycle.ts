import { useCallback, useEffect, useState } from "react"

const useTimedCycle = (modes: string[], interval: number) => {
  const [indx, setIndx] = useState(0)

  const cycle = useCallback(() => {
    const max = modes.length - 1
    console.log("cycle ran");


    setIndx(currIndx => {
      return currIndx === max ? 0 : currIndx + 1
    })
  }, [modes.length])

  useEffect(() => {
    const id = setInterval(cycle, interval)

    return () => {
      clearTimeout(id)
    }
  }, [cycle, interval])

  return modes[indx]
}

export { useTimedCycle }
