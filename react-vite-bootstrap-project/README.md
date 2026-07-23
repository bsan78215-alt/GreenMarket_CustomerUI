# GreenMarket — Stage 1 (Bootstrap)

Минимальный исполняемый фронтенд-проект GreenMarket. Этот этап создаёт
инфраструктуру разработки, не затрагивая архитектуру Platform Core.

## Требования

- Node.js 18+
- npm 9+

## Запуск

```bash
git clone <repo-url>
cd greenmarket
npm install
npm run dev
```

Приложение откроется на `http://localhost:5173`.

Другие команды:

```bash
npm run build     # production-сборка
npm run preview   # предпросмотр production-сборки
npm run lint      # проверка ESLint
npm run format    # форматирование Prettier
```

## Структура

```
src/
  app/             # App Shell: App.tsx, ErrorBoundary, NavigationContainer
  screens/         # Экраны (на этом этапе — заглушки)
  runtime/         # RuntimeProvider — точка интеграции с Runtime Layer
  shared/          # Общие стили и утилиты
  design-system/   # ThemeProvider — точка интеграции с Design System
  repositories/    # Резерв под существующие репозитории данных
  mocks/           # Резерв под тестовую инфраструктуру
main.tsx           # Точка входа
```

## Используемые технологии

- React 18
- TypeScript (strict mode)
- Vite 5
- React Router 6
- ESLint + Prettier
- EditorConfig

## Команды npm

| Команда           | Назначение                       |
|-------------------|-----------------------------------|
| `npm install`     | установка зависимостей            |
| `npm run dev`     | запуск dev-сервера с hot reload   |
| `npm run build`   | production-сборка (tsc + vite)    |
| `npm run preview` | предпросмотр production-сборки    |
| `npm run lint`    | статическая проверка кода         |
| `npm run format`  | автоформатирование кода           |

## Ограничения этапа

На данном этапе не реализуются бизнес-логика, backend, Mock Repository,
вёрстка экранов; не изменяются UX и Design System. Экраны — заглушки,
маршрутизация между ними рабочая.

## Следующий этап

Этап 2: интеграция Design System и реализация пользовательского интерфейса.
