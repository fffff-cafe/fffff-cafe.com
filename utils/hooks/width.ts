import { useState, useEffect } from "react"

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    
    // Set initial width on mount
    handleResize()
    
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return width
}
