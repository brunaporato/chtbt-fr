import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 992

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    function onChange() {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    return () => {
      mql.removeEventListener('change', onChange)
    }
  }, [])

  return !!isMobile
}
