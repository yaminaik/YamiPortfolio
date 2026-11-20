import { useEffect, useRef } from 'react'

// 1. A soft violet glow that trails the cursor across the page.
// 2. Cards (anything with the .glow class) get a spotlight that follows the mouse.
// Both are skipped on touch screens and when the visitor prefers reduced motion.
export default function CursorEffects() {
  const glowRef = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduced) return

    const glow = glowRef.current
    let x = window.innerWidth / 2, y = window.innerHeight / 3
    let tx = x, ty = y, raf

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      glow.style.opacity = '1'
      const card = e.target.closest?.('.glow')
      if (card) {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${e.clientX - r.left}px`)
        card.style.setProperty('--my', `${e.clientY - r.top}px`)
      }
    }
    const onLeave = () => { glow.style.opacity = '0' }

    const loop = () => {
      x += (tx - x) * 0.14
      y += (ty - y) * 0.14
      glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}