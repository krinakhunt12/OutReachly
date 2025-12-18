import { useEffect, useRef } from 'react'

export default function AnimatedOnScroll({ children, className = '', threshold = 0.12, rootMargin = '0px', once = true, delay = 0, direction = 'up' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            if (once) observer.unobserve(el)
          } else if (!once) {
            el.classList.remove('visible')
          }
        })
      },
      { threshold, rootMargin }
    )

    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  const dirClass = ['left', 'right', 'up', 'down'].includes(direction) ? direction : 'up'

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
