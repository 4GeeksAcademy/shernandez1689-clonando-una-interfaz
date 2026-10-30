# Contexto del proyecto: Clonando una interfaz (Airbnb)

Clon de tres vistas de Airbnb.com, pensado primero para móvil (viewport de 375px), hecho con Next.js 16 (App Router), TypeScript y Tailwind CSS. No se usa ninguna librería de componentes preconstruida: todo son componentes propios con clases de utilidad de Tailwind.

## Usuario

La persona usuaria es alguien que planea un viaje (una escapada de fin de semana o unas vacaciones) y busca un alojamiento que se ajuste a su destino, sus fechas, su presupuesto y el número de huéspedes. Quiere explorar opciones rápido desde el móvil, comparar fotos, precios y valoraciones, ver dónde está cada lugar en el mapa, confiar en el anfitrión y en el alojamiento gracias a las reseñas y los detalles, y llegar al botón "Reservar" sabiendo exactamente cuánto va a pagar.

## Páginas

Las tres páginas siguen el flujo principal: descubrir → comparar → evaluar.

### 1. Inicio / Home (`/`)
Es la puerta de entrada. Arriba hay una barra de búsqueda tipo píldora ("Comienza a explorar") y debajo unas pestañas con icono (Todo, Alojamientos, Experiencias). El contenido se organiza en secciones con título y flecha ("Alojamientos en Mánchester", "Descubre experiencias cercanas", "Alojamientos en Edimburgo"…). Cada sección es un carrusel horizontal de tarjetas con foto, botón de favorito, insignia opcional "Favorito entre huéspedes", tipo y ubicación, fechas, tipo de anfitrión, precio total y valoración. Abajo hay una barra de navegación fija (Explorar, Favoritos, Iniciar sesión).

### 2. Catálogo / Resultados de búsqueda (`/catalog`)
Muestra los alojamientos de un destino. Arriba hay una cabecera con el botón de volver, una píldora con el resumen de la búsqueda ("Alojamientos en Ciudad de México · Cualquier semana · ¿Cuántos?") y el botón de filtros. Debajo hay una fila de filtros rápidos en chips (Reservación inmediata, Lavadora, Wifi…). La mitad superior es un mapa con marcadores de precio, y encima se superpone una hoja inferior (bottom sheet) con un asa, el número de resultados ("Más de 1000 alojamientos") y un listado vertical de tarjetas grandes con carrusel de fotos, insignia ("Superanfitrión" / "Favorito entre huéspedes"), favorito, título, descripción, fechas, precio y valoración. Abajo, la misma barra de navegación fija.

### 3. Detalle de la habitación (`/rooms/[id]`)
Muestra toda la información de un alojamiento. Empieza con una galería de fotos a todo el ancho, con botones flotantes para volver, compartir y guardar, y un contador "1 / 34". Encima de la galería sube una tarjeta con esquinas redondeadas que contiene el título centrado ("Color Condesa"), el tipo y la ubicación, la capacidad (4 huéspedes · 2 habitaciones · 2 camas · 2 baños), la valoración y las reseñas, el anfitrión, los aspectos destacados con icono, la descripción, las camas, los servicios, el calendario, las reseñas, el mapa y las normas. Abajo hay una barra fija con el precio total subrayado, las fechas, una píldora "Hoy a £0 · Cancelación gratuita", el botón degradado "Reservar" y el texto "Aún no se te cobrará nada".

## Capturas de referencia (375px)

Las capturas se tomaron con Playwright en el viewport de un iPhone (375×812, densidad 3×) el 2026-10-30, desde es.airbnb.com:

| Vista | Primera pantalla | Página completa |
|---|---|---|
| Inicio | `docs/screenshots/01-home-viewport.png` | `docs/screenshots/01-home-full.png` |
| Catálogo | `docs/screenshots/02-catalogo-viewport.png` | `docs/screenshots/02-catalogo-full.png` |
| Detalle | `docs/screenshots/03-detalle-viewport.png` | `docs/screenshots/03-detalle-full.png` |

## Componentes principales por vista

### Inicio
- `SearchPill`: píldora "Comienza a explorar" con el icono de lupa
- `CategoryTabs` / `CategoryTab`: pestañas con icono (Todo, Alojamientos, Experiencias), con la activa resaltada
- `ListingSection`: título de la sección, botón de flecha y carrusel horizontal
- `ListingCard` (variante compacta): foto, `FavoriteButton`, `Badge`, título, fechas · anfitrión, precio total · valoración
- `ExperienceCard`: foto cuadrada y título
- `BottomNav` / `BottomNavItem`: navegación inferior fija

### Catálogo
- `SearchHeader`: botón de volver, `SearchSummaryPill` y botón de filtros
- `FilterChips` / `FilterChip`: filtros rápidos con scroll horizontal
- `MapView` / `PriceMarker`: mapa (imagen estática) con marcadores de precio
- `BottomSheet`: hoja superpuesta con asa y contador de resultados
- `ListingCard` (variante grande): `ImageCarousel` con puntos, `Badge`, `FavoriteButton` y textos
- `BottomNav`

### Detalle de la habitación
- `PhotoGallery`: foto a todo el ancho con contador "1 / N"
- `FloatingIconButton`: botones circulares de volver, compartir y guardar
- `ListingInfoCard`: tarjeta redondeada que se superpone a la galería
- `ListingTitle`: título, tipo y ubicación, capacidad
- `RatingSummary`: valoración, insignia y número de reseñas
- `HostPreview`: avatar, nombre y años como anfitrión
- `Highlights` / `HighlightItem`: icono, título y descripción
- `Description`, `SleepingArrangements`, `AmenitiesList`, `ReviewsSection` / `ReviewCard`, `LocationMap`, `ThingsToKnow`
- `ReservationBar`: precio total, fechas, píldora de cancelación, botón "Reservar" y nota

### Compartidos
- `Badge`, `FavoriteButton`, `ImageCarousel`, `StarRating`, `Avatar`, `Divider`, `Icon` (SVG en línea), `BottomNav`

## Especificaciones de componentes (prompts de visión)

Prompt usado con cada captura (primera pantalla + página completa):

> "Analiza esta captura de Airbnb en un viewport móvil de 375px. Genera una especificación de componentes en React/TypeScript: para cada componente indica (1) su nombre, (2) sus props con tipos, y (3) su relación de layout dentro de la página (qué contiene a qué, dirección flex/grid, qué está fijo o superpuesto, qué hace scroll). Reutiliza componentes entre vistas cuando sea posible."

Convenciones: `?` = prop opcional. Las medidas son aproximadas en px CSS a 375px de ancho (las capturas están a 3×). Margen lateral general: 24px (`px-6`).

### Inicio (`/`)

Referencias: `01-home-viewport.png`, `01-home-full.png`.

**Árbol de layout**

```
<HomePage>                              flex-col, pb-20 (espacio para BottomNav)
├── <header sticky top-0>               fondo blanco, z-20
│   ├── <SearchPill />                  ancho completo con margen de 24px, centrado
│   └── <CategoryTabs />                fila horizontal con scroll, debajo de la píldora
├── <main>                              flex-col, gap-8
│   ├── <ListingSection />  × N         "Alojamientos en Mánchester", "Hospédate en Roma"…
│   │   ├── <SectionHeader />           título (flex-1) + botón flecha a la derecha
│   │   └── <HorizontalScroller>        flex-row, overflow-x-auto, snap-x, gap-4
│   │       └── <ListingCard variant="compact" /> × M   ancho ~158px (se ven 2 + un trozo)
│   ├── <ExperienceSection />           "Descubre experiencias cercanas"
│   │   ├── <SectionHeader />
│   │   └── <HorizontalScroller>
│   │       └── <ExperienceCard /> × M  ancho ~102px, foto cuadrada
│   └── <InspirationSection />          fondo gris claro, "Inspiración para futuras escapadas"
│       ├── <UnderlineTabs />           Populares · Costa · Histórico · Islas… (activa subrayada)
│       └── <DestinationGrid />         grid-cols-2, ciudad + tipo de alojamiento, "Mostrar más"
├── <Footer />                          fondo gris claro, columnas de enlaces apiladas
└── <BottomNav />                       fixed bottom-0, z-30
```

**Componentes**

| Componente | Props | Layout / notas |
|---|---|---|
| `SearchPill` | `label: string` ("Comienza a explorar"), `onClick?: () => void` | `rounded-full`, borde + sombra suave, alto ~56px, icono de lupa + texto centrados |
| `CategoryTabs` | `tabs: { id: string; label: string; icon: string }[]`, `activeId: string`, `onChange?: (id: string) => void` | flex-row, overflow-x-auto, gap-3 |
| `CategoryTab` | `label: string`, `icon: string`, `active: boolean` | píldora con emoji/icono + texto; la activa tiene fondo gris y sombra interior |
| `SectionHeader` | `title: string`, `subtitle?: string`, `href?: string` | flex-row justify-between; título en negrita (~22px); botón circular gris de 32px con flecha →; el subtítulo opcional va debajo en gris ("Hoteles excelentes…") |
| `ListingSection` | `title: string`, `subtitle?: string`, `href?: string`, `listings: Listing[]` | `SectionHeader` + `HorizontalScroller` de `ListingCard` compactas |
| `HorizontalScroller` | `children: ReactNode`, `className?: string` | flex-row, overflow-x-auto, snap-x, sin barra visible, padding lateral de 24px |
| `ListingCard` (`compact`) | `listing: Listing`, `variant: "compact"` | flex-col; foto cuadrada `rounded-2xl` (~158×158) con `FavoriteButton` arriba a la derecha y `Badge` arriba a la izquierda; debajo: título (2 líneas, semibold), "fechas · tipo de anfitrión" (gris), "£270 en total · ★ 4.83" |
| `FavoriteButton` | `active?: boolean`, `onToggle?: () => void` | absolute top-3 right-3; corazón blanco con relleno gris semitransparente |
| `Badge` | `label: string`, `icon?: ReactNode` | absolute top-3 left-3; píldora blanca/translúcida, texto pequeño semibold ("Favorito entre huéspedes") |
| `ExperienceCard` | `title: string`, `imageUrl: string`, `href?: string` | foto cuadrada `rounded-2xl` + título debajo (semibold, hasta 2 líneas) |
| `UnderlineTabs` | `tabs: string[]`, `active: string`, `onChange?` | flex-row con scroll, borde inferior gris; la pestaña activa lleva una línea negra de 2px |
| `DestinationGrid` | `items: { city: string; type: string }[]` | `grid grid-cols-2 gap-x-4 gap-y-6`; ciudad en negro y tipo en gris, truncados |
| `Footer` | `sections: { title: string; links: string[] }[]` | bloques apilados separados por `Divider`; al final, idioma/moneda, iconos sociales y © |
| `BottomNav` | `items: { label: string; icon: ReactNode; href: string }[]`, `activeHref: string` | fixed bottom-0 inset-x-0, alto ~64px, borde superior, 3 elementos centrados; el activo en rosa `#FF385C` |

### Catálogo / Resultados (`/catalog`)

Referencias: `02-catalogo-viewport.png`, `02-catalogo-full.png`.

**Árbol de layout**

```
<SearchResultsPage>                     h-dvh, relative, overflow-hidden en móvil
├── <SearchHeader sticky top-0 z-20>    flex-row items-center, gap-3, px-4, fondo blanco
│   ├── <IconButton icon="back" />
│   ├── <SearchSummaryPill />           flex-1
│   └── <IconButton icon="filters" />
├── <FilterChips />                     fila horizontal con scroll, debajo de la cabecera
├── <MapView />                         absolute: ocupa desde los chips hasta el fondo
│   └── <PriceMarker /> × N             absolute, posición calculada (top/left %)
├── <BottomSheet />                     absolute, empieza a ~55% de la altura; rounded-t-3xl
│   ├── <SheetHandle />                 barra gris de 40×4 centrada
│   ├── <ResultsCount />                "Más de 1000 alojamientos", centrado, semibold
│   └── <ListingList>                   flex-col, gap-8, px-6, scroll vertical dentro de la hoja
│       └── <ListingCard variant="large" /> × N
└── <BottomNav />                       fixed bottom-0 (se comparte con Inicio)
```

**Componentes**

| Componente | Props | Layout / notas |
|---|---|---|
| `SearchHeader` | `title: string`, `subtitle: string`, `onBack?`, `onFilters?` | flex-row; botón de volver a la izquierda, píldora en el centro (flex-1), filtros a la derecha |
| `SearchSummaryPill` | `title: string` ("Alojamientos en Ciudad de México"), `subtitle: string` ("Cualquier semana · ¿Cuántos?") | `rounded-full` con borde y sombra, 2 líneas centradas: título semibold truncado y subtítulo gris |
| `IconButton` | `icon: ReactNode`, `label: string` (aria), `variant?: "plain" \| "floating"`, `onClick?` | `plain`: sin fondo (cabecera); `floating`: círculo blanco translúcido de 40px (detalle) |
| `FilterChips` | `filters: { id: string; label: string }[]`, `selected?: string[]`, `onToggle?` | flex-row, overflow-x-auto, gap-2, px-4 |
| `FilterChip` | `label: string`, `selected?: boolean` | `rounded-full` con borde gris, alto ~34px, texto de 14px; el seleccionado va con fondo negro y texto blanco |
| `MapView` | `imageUrl: string`, `markers: { id: string; price: string; x: number; y: number }[]` | contenedor relative con imagen estática del mapa (`object-cover`); los marcadores van absolute |
| `PriceMarker` | `price: string`, `active?: boolean` | píldora blanca, sombra, texto bold de 14px; la activa en negro con texto blanco |
| `BottomSheet` | `children: ReactNode`, `title: string` | fondo blanco, `rounded-t-3xl`, sombra superior; asa + título + lista con scroll |
| `ListingCard` (`large`) | `listing: Listing`, `variant: "large"` | foto de ancho completo (~327×327, `rounded-2xl`) con `ImageCarousel`; `Badge` + `FavoriteButton` encima; debajo, en una fila: título semibold + `StarRating` a la derecha ("★ 4.84 (192)" o "★ Nuevo"); luego descripción (truncada, gris), camas/habitaciones (gris), fechas (gris), "£309 en total" (semibold subrayado) y una etiqueta opcional "Cancelación gratuita" (chip gris pequeño) |
| `ImageCarousel` | `images: string[]`, `alt: string`, `rounded?: boolean` | flex-row con overflow-x-auto y snap-x; `DotsIndicator` absolute bottom-3 centrado |
| `DotsIndicator` | `count: number`, `active: number`, `max?: number` (5) | puntos blancos de 6px; el activo opaco y los demás translúcidos, cada vez más pequeños hacia el final |
| `StarRating` | `rating?: number`, `reviewCount?: number`, `isNew?: boolean` | inline-flex; estrella negra + "4.84 (192)" o "Nuevo" |

### Detalle de la habitación (`/rooms/[id]`)

Referencias: `03-detalle-viewport.png`, `03-detalle-full.png`.

**Árbol de layout**

```
<RoomPage>                              flex-col, pb-40 (espacio para ReservationBar)
├── <PhotoGallery />                    relative, ancho completo, alto ~330px
│   ├── <ImageCarousel />               sin redondeo
│   ├── <IconButton floating "back" />  absolute top-3 left-3
│   ├── <div absolute top-3 right-3>    flex-row gap-3
│   │   ├── <IconButton floating "share" />
│   │   └── <IconButton floating "heart" />
│   └── <PhotoCounter />                absolute bottom-4 right-3, "1 / 34"
├── <ListingInfoCard>                   -mt-6, rounded-t-3xl, fondo blanco, relative z-10, px-6
│   ├── <ListingTitle />                centrado
│   ├── <Highlights />                  separado con Divider
│   ├── <Description />
│   ├── <SleepingArrangements />
│   ├── <AmenitiesList />
│   ├── <AccessibilityFeatures />
│   ├── <LocationMap />
│   ├── <AvailabilityCalendar />
│   ├── <ReviewsSection />
│   ├── <HostProfile />
│   ├── <ThingsToKnow />
│   ├── <ReportLink />
│   └── <SimilarListings />             HorizontalScroller de tarjetas pequeñas
├── <Breadcrumbs /> + <Footer />        fondo gris
└── <ReservationBar />                  fixed bottom-0, z-30, borde superior
```

Las secciones de `ListingInfoCard` van separadas por `<Divider />` (línea gris de 1px, `my-8`) y cada una empieza con un `SectionTitle` (~22px, semibold).

**Componentes**

| Componente | Props | Layout / notas |
|---|---|---|
| `PhotoGallery` | `images: string[]`, `title: string` | relative; contiene el carrusel, los botones flotantes y el contador |
| `PhotoCounter` | `current: number`, `total: number` | píldora gris oscura translúcida, texto blanco de 12px |
| `ListingInfoCard` | `children: ReactNode` | se superpone ~24px a la galería con `rounded-t-3xl` |
| `ListingTitle` | `title: string`, `typeAndLocation: string`, `capacity: { guests: number; bedrooms: number; beds: number; baths: number }` | text-center; título de ~28px semibold; tipo/ubicación gris; capacidad unida con " · " |
| `Highlights` | `items: { icon: ReactNode; title: string; description?: string }[]` | flex-col gap-6; cada `HighlightItem` es una fila con el icono (24px) y el texto |
| `Description` | `text: string`, `maxLines?: number` (8) | párrafo con `line-clamp` + `SecondaryButton` "Mostrar más" de ancho completo |
| `SecondaryButton` | `label: string`, `onClick?` | ancho completo, `rounded-lg`, fondo gris `#F2F2F2`, texto semibold centrado, alto ~48px |
| `SleepingArrangements` | `rooms: { name: string; beds: string; imageUrl: string }[]` | título "Dónde vas a dormir" + `HorizontalScroller` de tarjetas (foto `rounded-xl` ~155×100 + nombre semibold + camas en gris) |
| `AmenitiesList` | `amenities: { icon: ReactNode; label: string }[]`, `total: number` | título "Lo que ofrece este lugar"; lista flex-col gap-5 (icono + texto) y `SecondaryButton` "Mostrar las 22 amenidades" |
| `AccessibilityFeatures` | `features: { title: string; description: string; imageUrl: string }[]` | título + subtítulo gris + tarjetas con foto + `SecondaryButton` |
| `LocationMap` | `location: string`, `mapImageUrl: string`, `neighborhoodHighlight: string` | título "Dónde vas a estar", ubicación, mapa `rounded-2xl` (~327×327) con un pin negro en forma de casa en el centro, y luego "Aspectos destacados del barrio" + enlace subrayado "Mostrar más ›" |
| `AvailabilityCalendar` | `month: Date`, `checkIn: Date`, `checkOut: Date`, `unavailable: Date[]` | título "5 noches en Ciudad de México" + rango gris; navegación ‹ mes › y `grid grid-cols-7`; los extremos del rango en círculo negro, el intervalo con fondo gris y los días no disponibles tachados en gris; enlace "Borrar fechas" |
| `ReviewsSection` | `rating?: number`, `reviewCount: number`, `reviews: Review[]` | título ("Nuevo · 1 evaluación" o "★ 4.9 · N evaluaciones") + nota gris + lista de `ReviewCard` |
| `ReviewCard` | `review: Review` (`author`, `avatarUrl`, `location`, `rating`, `date`, `text`) | fila con `Avatar` (48px) + nombre semibold + ubicación gris; debajo, ★★★★★ · fecha y el texto |
| `HostProfile` | `host: Host` (+ `reviewCount`, `rating`, `responseRate`, `responseTime`) | título "Conoce a tu anfitrión"; tarjeta blanca con sombra y `rounded-3xl`, en grid de 2 columnas: a la izquierda `Avatar` grande (~100px) con un sello rosa de verificación, el nombre (~32px bold) y "Superanfitrión"; a la derecha 3 estadísticas apiladas separadas por líneas. Debajo, el texto sobre el Superanfitrión, la información del anfitrión, `SecondaryButton` "Escríbele al anfitrión" y un aviso de protección de pagos |
| `Avatar` | `src: string`, `alt: string`, `size?: number`, `verified?: boolean` | `rounded-full object-cover`; si es `verified`, lleva un sello absolute bottom-right |
| `ThingsToKnow` | `items: { icon: ReactNode; title: string; description: string; href?: string }[]` | título "Qué debes saber"; filas con icono (32px) + título semibold + descripción gris truncada + chevron › a la derecha |
| `ReportLink` | `label: string` | fila con icono de bandera + texto subrayado |
| `SimilarListings` | `listings: Listing[]` | título "Más alojamientos a tu alrededor" + `HorizontalScroller` de tarjetas (foto cuadrada ~155px, título en negrita de hasta 4 líneas, "£519 · ★ 5.0") |
| `Breadcrumbs` | `items: string[]` | fondo gris; elementos separados por "›" |
| `ReservationBar` | `totalPrice: string`, `dates: string`, `cancellationNote: string`, `onReserve?` | fixed bottom-0, fondo blanco, borde superior, px-6 py-4; arriba "£589 en total" (semibold subrayado), las fechas y una píldora gris "Hoy a £0 · Cancelación gratuita"; debajo, `PrimaryButton` y la nota "Aún no se te cobrará nada" centrada en gris |
| `PrimaryButton` | `label: string`, `onClick?`, `fullWidth?: boolean` | `rounded-full`, alto ~48px, degradado `from-[#E61E4D] to-[#D70466]`, texto blanco semibold |

### Tokens de diseño observados

- **Color primario:** `#FF385C` (activo en `BottomNav`); degradado del botón `#E61E4D → #D70466`
- **Texto:** principal `#222222`, secundario `#6A6A6A`; bordes y divisores `#DDDDDD`; fondos grises `#F7F7F7` / `#F2F2F2`
- **Radios:** tarjetas e imágenes `rounded-2xl`, botones secundarios `rounded-lg`, píldoras y chips `rounded-full`, hoja del catálogo y tarjeta del detalle `rounded-t-3xl`
- **Tipografía:** sans-serif geométrica (Airbnb Cereal); en el clon se usa una alternativa de Google Fonts parecida. Títulos de sección ~22px semibold, cuerpo 14–16px
- **Datos a ampliar en `/types`:** `Listing` necesita campos nuevos: `description`, `beds`, `bedrooms`, `badge?: "guest-favorite" | "superhost"`, `freeCancellation?: boolean`, `totalPrice`; nuevos tipos `Review`, `Amenity`, `Highlight`, `Room`

### Limitaciones de las capturas

- En la captura completa del catálogo, a partir de unas 20 tarjetas solo hay blanco porque Airbnb deja de pintar las tarjetas que no están a la vista. Se ven las suficientes para describir la tarjeta, pero no la paginación del final.
- En el detalle, el popup "Agrega 2 noches por £133" (una oferta de Airbnb) tapa parte de los aspectos destacados. No se implementará.
- Los precios salen en GBP y las ciudades del Inicio son de Europa porque el servidor que hizo las capturas está en Reino Unido. Los datos de prueba del clon pueden usar cualquier moneda.

## Implementación (pasos 3–6)

Las especificaciones de arriba describen Airbnb tal cual. El clon implementa lo que pide el enunciado y aprovecha esos nombres donde encajan.

| Ruta | Archivo | Estado y efectos |
|---|---|---|
| `/` | `app/page.tsx` | `useState`: `listings`, `loading`, `query`, `activeCategory`. `useEffect` + `setTimeout(1000)` carga `LISTINGS` |
| `/catalog` | `app/catalog/page.tsx` | `useState`: `sortOrder` (`"asc"`/`"desc"`), `query` |
| `/rooms/[id]` | `app/rooms/[id]/page.tsx` → `components/RoomDetail.tsx` | `useParams` para leer el id; `useEffect` + `setTimeout(800)` carga la habitación. `PhotoGallery` (índice), `BookingCard` (huéspedes) |

- **Datos simulados:** `data/listings.ts` (14 alojamientos, categorías y servicios). **Tipos:** `types/listing.ts`. **Utilidades:** `lib/format.ts`.
- **Componentes reutilizables (`/components`):** `Navbar`, `CategoryBar`, `ListingCard` (se usa en Inicio y Catálogo), `PhotoPlaceholder`, `StarRating`, `FavoriteButton`, `LoadingIndicator`, `SortSelect`, `MapPlaceholder`, `PhotoGallery`, `HostRow`, `AmenitiesGrid`, `GuestCounter`, `BookingCard`, `icons`.
- **Navegación:** solo con `<Link>` de `next/link`. Las tarjetas llevan a `/rooms/[id]` y el detalle tiene un botón de volver y un breadcrumb (Inicio › Catálogo › título).
- **Next.js 16 con `cacheComponents`:** `/rooms/[id]` exporta `generateStaticParams` y envuelve `RoomDetail` en `<Suspense>`, porque `useParams` puede suspender con ids desconocidos.
- **Marca:** se usa el nombre "clonbnb" con un icono de casa propio en lugar del logotipo de Airbnb.
