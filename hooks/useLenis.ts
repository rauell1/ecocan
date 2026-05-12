/**
 * hooks/useLenis.ts
 * =================
 * React hook that initialises Lenis smooth scroll on mount and cleans up
 * on unmount. Should be used in the root layout client component AFTER the
 * hero transition unlocks scroll.
 *
 * The Lenis instance is stored in a ref (not state) to prevent re-renders.
 *
 * Usage
 * -----
 * 'use client'
 * import { useLenis } from '@/hooks/useLenis'
 *
 * export default function SmoothScrollProvider({ children }) {
 *   useLenis()
 *   return <>{children}</>
 * }
 */

'use client'

import { useEffect, useRef } from 'react'
import { initLenis, getLenis } from '@/lib/lenis'
import type Lenis from 'lenis'

export function useLenis(): React.MutableRefObject<Lenis | null> {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const cleanup = initLenis()
    lenisRef.current = getLenis()
    return cleanup
  }, [])

  return lenisRef
}
