# FILE_TREE.md

Полное дерево архива GreenMarket_CustomerUI-main по состоянию на момент инвентаризации.

Метод получения: find . | sort, без исключений (кроме несуществующих здесь .git/node_modules).

Итоговый счётчик: 123 файла (без учёта содержимого вложенного архива archive/*.zip — он считается одним файлом, 31 файл внутри него в этот счётчик не входит; см. DOCUMENT_INDEX.md → раздел «Архивный снимок» для его содержимого).

```
.
├── archive/
│   └── GreenMarket_CustomerUI_v3_2026-07-08_2.zip
├── docs/
│   ├── architecture/
│   │   ├── 21_prompt_fsm_engine_sovmestimost.md
│   │   └── 22_tz022_podgotovka_k_fsm_engine.md
│   ├── reviews/
│   │   ├── 20_meta_review_struktury_arhiva.md
│   │   ├── 25_review_arhiva_posle_dobavleniya_tz023_024.md
│   │   └── 26_rekomendacii_svyazannye_dokumenty_i_chitatel.md
│   ├── specifications/
│   │   ├── 01_tz001_glavny_ekran_pokupatelya.md
│   │   ├── 02_tz002_varianty_pokupki.md
│   │   ├── 03_tz003_kartochka_prodavtsa.md
│   │   ├── 04_tz005_obschie_printsipy_customer_ui.md
│   │   ├── 05_tz006_user_flow_povsednevnaya_pokupka.md
│   │   ├── 06_tz007_model_sostoyaniy_fsm.md
│   │   ├── 07_tz008_viewmodel_customer_ui.md
│   │   ├── 08_tz009_kontrakt_ui_backend.md
│   │   ├── 09_tz010_glossariy_greenmarket.md
│   │   ├── 10_tz011_printsipy_proektirovaniya.md
│   │   ├── 11_tz013_pravila_razvitiya_ui.md
│   │   ├── 12_tz014_predmetnaya_model.md
│   │   ├── 13_tz015_purchase_optimizer.md
│   │   ├── 14_tz016_informatsionnaya_model.md
│   │   ├── 15_tz017_sobytiynaya_model.md
│   │   ├── 16_tz018_katalog_deystviy.md
│   │   ├── 17_tz019_raspredelenie_otvetstvennosti.md
│   │   ├── 18_tz020_biznes_pravila.md
│   │   ├── 19_tz021_nfr.md
│   │   ├── 23_tz023_glavny_ekran_detalnaya_specifikaciya.md
│   │   ├── 24_tz024_bottom_sheet_detalnaya_specifikaciya.md
│   │   ├── 27_tz025_kartochka_prodavtsa_detalnaya.md
│   │   ├── 28_tz026_protokol_verifikacii_tz.md
│   │   └── 29_tz025_kartochka_prodavtsa_candidate_v1.1.md
│   └── README.md
├── examples/
│   ├── BottomSheetDeclarative_3.jsx
│   ├── BottomSheetDeclarative_3.tsx.jsx
│   └── types.ts.txt
├── greenmarket/
│   └── GreenMarket/
│       ├── adapters/
│       │   └── SellerCardAdapter.ts
│       ├── basket/
│       │   ├── adapters/
│       │   │   └── BasketAdapter.ts
│       │   ├── builders/
│       │   │   └── BasketBuilder.ts
│       │   ├── viewmodels/
│       │   │   └── BasketViewModel.ts
│       │   └── BasketScreen.tsx
│       ├── builders/
│       │   ├── PurchaseOptionsBuilder.ts
│       │   ├── ScreenBuilder.ts
│       │   └── SellerCardBuilder.ts
│       ├── catalog/
│       │   ├── adapters/
│       │   │   └── CatalogAdapter.ts
│       │   ├── builders/
│       │   │   └── CatalogBuilder.ts
│       │   ├── viewmodels/
│       │   │   └── CatalogViewModel.ts
│       │   └── CatalogScreen.tsx
│       ├── contracts/
│       │   ├── Action.ts
│       │   ├── ContentBlock.ts
│       │   ├── DomainTypes.ts
│       │   ├── LoadState.ts
│       │   └── ViewState.ts
│       ├── docs/
│       │   ├── architecture/
│       │   │   └── GM-010_STAGE1_MODEL_MAPPING.md
│       │   ├── design-system/
│       │   │   ├── DS-002-Design-Tokens/
│       │   │   │   ├── DS-002-Color.md
│       │   │   │   ├── DS-002-Elevation.md
│       │   │   │   ├── DS-002-Icon-Sizes.md
│       │   │   │   ├── DS-002-Motion-Tokens.md
│       │   │   │   ├── DS-002-Radius.md
│       │   │   │   ├── DS-002-Spacing.md
│       │   │   │   └── DS-002-Typography.md
│       │   │   ├── DS-001-Design-Concept.md
│       │   │   ├── DS-v2-Refactor-Summary.md
│       │   │   └── README.md
│       │   └── ux/
│       │       ├── stage-1/
│       │       │   ├── GM-UX-001-Map.md
│       │       │   ├── GM-UX-002-Catalog.md
│       │       │   ├── GM-UX-003-Seller-List.md
│       │       │   ├── GM-UX-004-Seller-List-and-Card.md
│       │       │   ├── GM-UX-005-Seller-Card-and-Product-Card.md
│       │       │   ├── GM-UX-006-Product-Card.md
│       │       │   ├── GM-UX-007-Search.md
│       │       │   ├── GM-UX-008-CatalogScreen.md
│       │       │   ├── GM-UX-009_Product_Card.md
│       │       │   ├── GM-UX-010_Seller_Card.md
│       │       │   ├── GM-UX-011_Search_Technical_Specification.md
│       │       │   ├── GM-UX-012_Basket_Technical_Specification.md
│       │       │   └── GM-UX-013_Purchase_Options_Technical_Specification.md
│       │       └── README.md
│       ├── favorites/
│       │   ├── adapters/
│       │   │   └── FavoritesAdapter.ts
│       │   ├── builders/
│       │   │   └── FavoritesBuilder.ts
│       │   ├── viewmodels/
│       │   │   └── FavoritesViewModel.ts
│       │   └── FavoritesScreen.tsx
│       ├── formatting/
│       │   ├── DistanceFormatter.ts
│       │   ├── PriceFormatter.ts
│       │   ├── RatingFormatter.ts
│       │   └── SubtitleFormatter.ts
│       ├── presentation/
│       │   ├── DistanceVm.ts
│       │   ├── PriceVm.ts
│       │   ├── RatingVm.ts
│       │   └── SubtitleParts.ts
│       ├── product_card/
│       │   ├── adapters/
│       │   │   └── ProductCardAdapter.ts
│       │   ├── builders/
│       │   │   └── ProductCardBuilder.ts
│       │   ├── viewmodels/
│       │   │   └── ProductCardViewModel.ts
│       │   └── ProductCardScreen.tsx
│       ├── purchase_options/
│       │   ├── adapters/
│       │   │   └── PurchaseOptionsAdapter.ts
│       │   ├── formatting/
│       │   │   └── Formatters.ts
│       │   ├── presentation/
│       │   │   └── PurchaseOptionsPresentation.ts
│       │   ├── viewmodels/
│       │   │   └── PurchaseOptionsViewModel.ts
│       │   └── PurchaseOptionsScreen.tsx
│       ├── screens/
│       │   ├── BasketScreen.ts
│       │   ├── CatalogScreen.ts
│       │   ├── FavoritesScreen.ts
│       │   ├── ProductCardScreen.ts
│       │   ├── PurchaseOptionsScreen.ts
│       │   ├── ScreenDefinition.ts
│       │   ├── SearchScreen.ts
│       │   └── SellerCardScreen.ts
│       ├── search/
│       │   ├── adapters/
│       │   │   └── SearchAdapter.ts
│       │   ├── builders/
│       │   │   └── SearchBuilder.ts
│       │   ├── viewmodels/
│       │   │   └── SearchViewModel.ts
│       │   └── SearchScreen.tsx
│       ├── viewmodels/
│       │   └── SellerCardViewModel.ts
│       └── BottomSheetDeclarative.tsx
├── navigation-runtime-layer/
│   ├── domain/
│   │   └── catalog/
│   │       ├── tests/
│   │       │   ├── DomainModels.test.ts
│   │       │   └── MockSellerProductPhotoRepository.test.ts
│   │       ├── models/
│   │       │   └── SellerProductPhoto.ts
│   │       ├── MockSellerProductPhotoRepository.ts
│   │       └── SellerProductPhotoRepository.ts
│   ├── hooks/
│   │   └── useGreenMarketRuntime.ts
│   ├── navigation/
│   │   ├── tests/
│   │   │   └── NavigationStack.test.ts
│   │   ├── NavigationStack.ts
│   │   └── ScreenRegistry.ts
│   └── runtime/
│       ├── tests/
│       │   └── GreenMarketRuntime.test.ts
│       └── GreenMarketRuntime.ts
├── repo/
│   ├── README.md
│   ├── FILE_TREE.md
│   ├── DOCUMENT_INDEX.md
│   ├── CODE_INDEX.md
│   └── TRACEABILITY.md
└── README.md
```
