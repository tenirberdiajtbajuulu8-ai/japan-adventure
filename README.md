# Nihon Adventures — сайт о приключениях в Японии

Многостраничный сайт на **React + React Router + Tailwind CSS (Vite)**.
Дизайн и элементы повторяют лендинг из видео (hero с тёмной карточкой, кнопка «Take Tour»,
секции «Why…», «Clarity», сетка Features, тарифы), но тема — путешествия по Японии.

## Страницы

| Адрес        | Страница                                                        |
|--------------|-----------------------------------------------------------------|
| `/`          | Главная: hero с Фудзи, Why Japan, природа/города/культура, Highlights, Tours |
| `/nature`    | Природа: Фудзи, Хоккайдо, Якусима, Камикоти, сакура, момидзи    |
| `/cities`    | Города: Токио, Киото, Осака, Хиросима, Нара, Саппоро            |
| `/culture`   | Культура: чайная церемония, кабуки, мацури, онсен, еда, аниме   |
| `/tours`     | Тарифы + форма бронирования + список ваших заявок               |
| `/favorites` | Сохранённые места                                               |

## Что сохраняется в localStorage

Ключ `japan_adventure_state_v1`:
- **избранные места** (кнопка «Save to favorites» на карточках);
- **выбранный тариф** (кнопка «Book Now»);
- **заявки на туры** из формы бронирования (их можно отменить).

Данные не пропадают при перезагрузке страницы.

## Структура

```
src/
  App.jsx                 — только подключает маршруты
  main.jsx                — BrowserRouter + AppProvider
  routes/AppRoutes.jsx    — все маршруты сайта
  pages/                  — отдельные страницы (Home, Nature, Cities, Culture, Tours, Favorites, NotFound)
  components/             — Navbar, Footer, Hero, секции, карточки, форма и т.д.
  context/AppContext.jsx  — состояние сайта + localStorage
  data/                   — destinations.js, features.js, plans.js (весь контент здесь)
```

## Запуск

Нужен [Node.js](https://nodejs.org/) 18+.

```bash
npm install
npm run dev
```

Откройте адрес из терминала (обычно http://localhost:5173).

Сборка: `npm run build`, предпросмотр сборки: `npm run preview`.

## Как изменить контент

- Тексты и места — в `src/data/destinations.js`.
- Тарифы и цены — в `src/data/plans.js`.
- Иконки секции Highlights — в `src/data/features.js`.

## Как добавить настоящие фото

Сейчас вместо фотографий используются цветные градиенты, эмодзи и нарисованный SVG-пейзаж,
поэтому сайт работает без интернета и без внешних картинок.

Чтобы добавить фото к месту: положите файл в `public/images/` и допишите поле `image`
в нужный объект в `src/data/destinations.js`:

```js
{ id: 'fuji', title: 'Mount Fuji', image: '/images/fuji.jpg', /* ... */ }
```

Карточка автоматически покажет фото вместо градиента.
