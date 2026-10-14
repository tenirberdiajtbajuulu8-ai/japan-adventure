import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout.jsx'

import HomePage from '../pages/HomePage.jsx'
import NaturePage from '../pages/NaturePage.jsx'
import CitiesPage from '../pages/CitiesPage.jsx'
import CulturePage from '../pages/CulturePage.jsx'
import ToursPage from '../pages/ToursPage.jsx'
import FavoritesPage from '../pages/FavoritesPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

// Все маршруты сайта собраны в одном файле.
// Layout добавляет навигацию и футер ко всем страницам.
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/nature" element={<NaturePage />} />
        <Route path="/cities" element={<CitiesPage />} />
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
