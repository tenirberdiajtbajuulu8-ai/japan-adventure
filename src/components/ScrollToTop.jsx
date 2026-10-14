import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// При смене страницы прокручивает наверх,
// а если в адресе есть #якорь (например /tours#booking) — к нужному блоку.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
