# Galeria Podróży

Aplikacja w React do przeglądania, filtrowania i dodawania zdjęć z
kategoriami oraz stroną szczegółów każdego zdjęcia.

## Funkcjonalności

- przeglądanie galerii z filtrem po kategorii (Góry / Morze / Miasto)
- strona szczegółów pojedynczego zdjęcia (`/zdjecie/:id`)
- dodawanie nowego zdjęcia przez formularz (`/dodaj`)
- usuwanie zdjęcia i przełączanie flagi ulubionych na karcie
- obsługa stanu ładowania i błędu przy pobieraniu danych
- „Zdjęcie dnia” — losowe zdjęcie z zewnętrznego API (picsum.photos)
- strona błędu dla nieistniejącego adresu

## Uruchomienie

```bash
npm install
npm run dev
```

Aplikacja działa pod `http://localhost:5173`.

## Struktura projektu

- `src/components/` — komponenty wielokrotnego użytku (`PhotoCard`,
  `Gallery`, `CategoryBar`, `Layout`, `Footer`, `ZdjecieDnia`)
- `src/pages/` — strony podpięte pod routing (`GaleriaPage`,
  `ZdjeciePage`, `DodajPage`, `NotFoundPage`)
- `src/services/` — warstwa komunikacji z danymi (`zdjecia.js`)
- `src/hooks/` — współdzielona logika ze stanem (`useZdjecia`)
- `public/photos.json` — dane startowe galerii

## Technologie

React, React Router, Bootstrap, Vite.
