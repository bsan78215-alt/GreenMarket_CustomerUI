# CODE_INDEX.md

Все 63 файла .ts/.tsx репозитория (56 .ts + 7 .tsx), суммарно 3174 строки. Источник — обход дерева + заголовочные комментарии каждого файла (не пересказ, а прямое чтение). Столбец «Слой» — по повторяющемуся паттерну Screen → Builder → Adapter → ViewModel, встречающемуся во всех 7 доменных модулях.

## Легенда паттерна модуля

Каждый из 7 доменов (basket, catalog, favorites, product_card, purchase_options, search, seller-card) состоит из одинакового набора ролей:
- ViewModel — доменный контракт экрана, «что реально отдаёт Backend/Platform Core», без знания о рендеринге.
- Adapter — единственное место, конвертирующее ViewModel → ContentBlock[], включает форматирование.
- Builder — тонкая обёртка, приводящая Adapter к общему интерфейсу ScreenBuilder.
- **Screen (.tsx)** — точка входа модуля, делегирует в ScreenDefinition из общей папки screens/.
- **ScreenDefinition (screens/*.ts)** — декларативное описание экрана (какой Builder, какие availableActions).

## 1. greenmarket/GreenMarket/ — корень модуля

| Файл | Строк | Слой | Назначение |
|---|---|---|---|
| BottomSheetDeclarative.tsx | 1193 | Screen (карточка продавца, самый крупный файл в репозитории) | Монолитный компонент Bottom Sheet для карточки продавца; ссылается на ТЗ-025, ТЗ-024, ТЗ-004 |
| adapters/SellerCardAdapter.ts | 88 | Adapter | SellerCardViewModel → ContentBlock[]; помечен как «SellerCardBuilder из ТЗ-027 §5» |
| viewmodels/SellerCardViewModel.ts | 43 | ViewModel | Доменный контракт карточки продавца; содержит запись «АРХИТЕКТУРНОЕ РЕШЕНИЕ (2026-07-10): Вариант А», ссылается на ТЗ-025 §12, ТЗ-027 |
| builders/SellerCardBuilder.ts | 12 | Builder | Обёртка Adapter → ScreenBuilder |
| builders/ScreenBuilder.ts | 8 | Builder (общий интерфейс) | Общий контракт ScreenBuilder, используемый всеми доменами |
| builders/PurchaseOptionsBuilder.ts | 12 | Builder | Обёртка для purchase_options |

## 2. basket/ (корзина)

| Файл | Строк | Слой | Назначение |
|---|---|---|---|
| BasketScreen.tsx | 12 | Screen | Делегирует в screens/BasketScreen.ts |
| adapters/BasketAdapter.ts | 58 | Adapter | Только преобразование модели/форматирование; явно не пересчитывает суммы, не сортирует |
| builders/BasketBuilder.ts | 12 | Builder | — |
| viewmodels/BasketViewModel.ts | 40 | ViewModel | Ссылается на «ТЗ-037 §3» — файла ТЗ-037 в репозитории нет |

## 3. catalog/ (каталог)

| Файл | Строк | Слой | Назначение |
|---|---|---|---|
| CatalogScreen.tsx | 12 | Screen | — |
| adapters/CatalogAdapter.ts | 69 | Adapter | Форматирование через общие Formatter'ы |
| builders/CatalogBuilder.ts | 12 | Builder | — |
| viewmodels/CatalogViewModel.ts | 46 | ViewModel | Ссылается на «ТЗ-036 §5» — файла ТЗ-036 в репозитории нет |

## 4. favorites/ (избранное)

| Файл | Строк | Слой | Назначение |
|---|---|---|---|
| FavoritesScreen.tsx | 9 | Screen | — |
| adapters/FavoritesAdapter.ts | 43 | Adapter | — |
| builders/FavoritesBuilder.ts | 12 | Builder | — |
| viewmodels/FavoritesViewModel.ts | 35 | ViewModel | Ссылается на «ТЗ-038 §5» — файла ТЗ-038 в репозитории нет |

## 5. product_card/ (карточка товара)

| Файл | Строк | Слой | Назначение |
|---|---|---|---|
| ProductCardScreen.tsx | 18 | Screen | Комментарий: «раньше здесь была функция buildProductCardViewModel()» — след рефакторинга |
| adapters/ProductCardAdapter.ts | 29 | Adapter | — |
| builders/ProductCardBuilder.ts | 12 | Builder | — |
| viewmodels/ProductCardViewModel.ts | 19 | ViewModel | Явных ссылок на номер ТЗ не найдено |

## 6. purchase_options/ (варианты покупки) — единственный домен с доп. подслоем Presentation

| Файл | Строк | Слой | Назначение |
|---|---|---|---|
| PurchaseOptionsScreen.tsx | 23 | Screen | Компонует header/toolbar/availableActions |
| adapters/PurchaseOptionsAdapter.ts | 98 | Adapter | Самый крупный Adapter в репозитории |
| presentation/PurchaseOptionsPresentation.ts | 34 | Presentation (уникальный подслой) | Domain-модели → структурированные VM (PriceVm/RatingVm/SubtitleParts), без строк/локали |
| formatting/Formatters.ts | 24 | Formatting | Локаль, символы, разделители (⭐, ·, ₽) |
| viewmodels/PurchaseOptionsViewModel.ts | 55 | ViewModel | Ссылается на ТЗ-015, ТЗ-002 (реальные, существующие документы) |

## 7. search/ (поиск)

| Файл | Строк | Слой | Назначение |
|---|---|---|---|
| SearchScreen.tsx | 14 | Screen | Комментарий фиксирует историю переноса: ScreenDefinition раньше лежал в search/screens/, перенесён в общий screens/ |
| adapters/SearchAdapter.ts | 57 | Adapter | Не выполняет сам поиск — только форматирование |
| builders/SearchBuilder.ts | 12 | Builder | — |
| viewmodels/SearchViewModel.ts | 30 | ViewModel | Ссылается на «ТЗ-035 §5» — файла ТЗ-035 в репозитории нет |

## 8. screens/ — общий слой ScreenDefinition (8 файлов, «плоская» папка параллельно модулям)

| Файл | Строк | Назначение |
|---|---|---|
| ScreenDefinition.ts | 16 | Базовый тип: builder + availableActions |
| BasketScreen.ts | 18 | Ссылается на «ТЗ-037 §3» — отклонённое предложение локальной папки basket/screens/ |
| CatalogScreen.ts | 21 | Ссылается на «ТЗ-036 §3/§13» — тоже отклонённая локальная папка; добавляет SELECT_CATEGORY/REFRESH_CATALOG, которых не было в Action Catalog дословно |
| FavoritesScreen.ts | 11 | Комментарий: «та же схема, что уже трижды отклонялась» |
| ProductCardScreen.ts | 8 | — |
| PurchaseOptionsScreen.ts | 38 | — |
| SearchScreen.ts | 13 | Перенесён из search/screens/SearchScreenDefinition.ts (локальная папка удалена архитектурным решением) |
| SellerCardScreen.ts | 31 | Список действий взят из фактически используемых в BottomSheetDeclarative.tsx |

Наблюдение: минимум 4 раза в комментариях зафиксирован один и тот же архитектурный спор — очередное ТЗ просит локальную папку <модуль>/screens/, решение раз за разом её отклоняет в пользу общей screens/. Это признак повторяющегося рассинхрона между тем, что требуют внешние ТЗ (в т.ч. отсутствующие в репозитории ТЗ-036/037), и тем, что реально принято в кодовой базе.

## 9. contracts/ (5 файлов) — общие типы, без слоя

| Файл | Строк | Назначение |
|---|---|---|
| Action.ts | 60 | Строковые id как branded types (защита от подмены productId/sellerId) |
| ContentBlock.ts | 74 | Discriminated union примитивов разметки Bottom Sheet |
| DomainTypes.ts | 34 | Общие доменные типы (напр. категория, используемая Search/Filters/Favorites/SellerCard/PurchaseOptions) |
| LoadState.ts | 5 | loading / error / ready |
| ViewState.ts | 5 | Расширение LoadState: добавляет Idle/Empty |

## 10. formatting/ и presentation/ (8 файлов) — общие для всех модулей

| Файл | Строк |
|---|---|
| formatting/DistanceFormatter.ts | 7 |
| formatting/PriceFormatter.ts | 7 |
| formatting/RatingFormatter.ts | 7 |
| formatting/SubtitleFormatter.ts | 7 |
| presentation/DistanceVm.ts | 3 |
| presentation/PriceVm.ts | 5 |
| presentation/RatingVm.ts | 4 |
| presentation/SubtitleParts.ts | 3 |

## 11. navigation-runtime-layer/ — отдельный runtime-слой (11 файлов, единственное место с тестами)

| Файл | Строк | Назначение |
|---|---|---|
| runtime/GreenMarketRuntime.ts | 133 | Крупнейший файл слоя; ссылается на ТЗ-022 |
| runtime/__tests__/GreenMarketRuntime.test.ts | 65 | Тест на node:assert, запуск npx tsx |
| navigation/NavigationStack.ts | 95 | Типизированный стек экранов; заменяет локальный стек, ранее живший в BottomSheetDeclarative.tsx |
| navigation/__tests__/NavigationStack.test.ts | 38 | — |
| navigation/ScreenRegistry.ts | 44 | Ссылается на ТЗ-018 |
| hooks/useGreenMarketRuntime.ts | 82 | React-хук поверх Runtime; ссылается на ТЗ-022 |
| domain/catalog/SellerProductPhotoRepository.ts | 19 | Ссылается на GM-DOM-002 §8 — файла GM-DOM-002.md в репозитории нет |
| domain/catalog/MockSellerProductPhotoRepository.ts | 48 | Ссылается на GM-DOM-003 §4/§10 — файла нет |
| domain/catalog/models/SellerProductPhoto.ts | 31 | Дополнение к GM-DOM-001 §5 — файла нет |
| domain/catalog/__tests__/DomainModels.test.ts | 66 | Проверяет форму моделей по GM-DOM-001 §5.1–5.5 — файла нет |
| domain/catalog/__tests__/MockSellerProductPhotoRepository.test.ts | 35 | — |

Тесты — единственная работоспособная проверка в репозитории, но запускаются вручную через npx tsx, без jest/vitest-конфигурации и без CI.

## Сводка по расхождениям код ↔ документация (детали в TRACEABILITY.md)

Код ссылается на разделы (§N) следующих документов, отсутствующих как файлы в этом архиве: ТЗ-027, ТЗ-035, ТЗ-036, ТЗ-037, ТЗ-038, GM-DOM-001, GM-DOM-002, GM-DOM-003. Все ссылки на ТЗ-022, ТЗ-025, ТЗ-018, ТЗ-015, ТЗ-002, ТЗ-004, ТЗ-024 и GM-UX-001…013 — подтверждены существующими файлами.
