import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'japan_adventure_state_v1'

const DEFAULT_STATE = {
  favorites: [], // id сохранённых мест
  bookings: [], // заявки на туры
  selectedPlan: null, // выбранный тариф
}

function readState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) } : DEFAULT_STATE
  } catch {
    return DEFAULT_STATE
  }
}

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [state, setState] = useState(readState)

  // Всё состояние сайта автоматически сохраняется в localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* localStorage может быть недоступен (приватный режим) */
    }
  }, [state])

  function toggleFavorite(id) {
    setState((prev) => ({
      ...prev,
      favorites: prev.favorites.includes(id)
        ? prev.favorites.filter((x) => x !== id)
        : [...prev.favorites, id],
    }))
  }

  function clearFavorites() {
    setState((prev) => ({ ...prev, favorites: [] }))
  }

  function selectPlan(planId) {
    setState((prev) => ({ ...prev, selectedPlan: planId }))
  }

  function addBooking(booking) {
    const entry = {
      ...booking,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      createdAt: new Date().toISOString(),
    }
    setState((prev) => ({ ...prev, bookings: [entry, ...prev.bookings] }))
  }

  function removeBooking(id) {
    setState((prev) => ({ ...prev, bookings: prev.bookings.filter((b) => b.id !== id) }))
  }

  const value = {
    ...state,
    isFavorite: (id) => state.favorites.includes(id),
    toggleFavorite,
    clearFavorites,
    selectPlan,
    addBooking,
    removeBooking,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within <AppProvider>')
  return ctx
}
