<script lang="ts">
  import { language } from '$stores/language';
  import { t } from '$lib/i18n';
  import { generateMetaTags } from '$utils/seo';
  import { buildPageUrl } from '$lib/routes';

  // Set Italian as default language for root page
  language.set('it');

  let meta = generateMetaTags({
    title: 'Residenza Angelica - Luxury Hotel Residence',
    description:
      'Experince luxury accommodation at Residenza Angelica with premium services, beautiful rooms, and unforgettable experiences.',
    keywords: ['hotel', 'luxury', 'accommodation', 'residence', 'rooms', 'services'],
    ogTitle: 'Residenza Angelica - Luxury Hotel Residence',
    ogDescription: 'Experience luxury accommodation with premium services',
    ogImage: '/og-image-home.jpg',
    canonical: 'https://residenza-angelica.it/',
  });
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  <meta name="keywords" content={meta.keywords} />
  <meta name="og:title" content={meta['og:title']} />
  <meta name="og:description" content={meta['og:description']} />
  <meta name="og:image" content={meta['og:image']} />
  <meta name="canonical" content={meta.canonical} />
  <meta name="robots" content={meta.robots} />
</svelte:head>

<!-- Hero Section -->
<div class="hero min-h-screen relative overflow-hidden">
  <!-- Video Background -->
  <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
    <source src="/video-home-page.mp4" type="video/mp4" />
    <source src="/video-home-page.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black opacity-20"></div>

  <!-- Content -->
  <div class="hero-content relative z-10 text-center text-white">
    <div class="max-w-4xl">
      <p class="mb-4 uppercase tracking-widest text-md font-semibold opacity-90 shadow-black drop-shadow-md">
        Residenza Rilassante Per Le Tue Vacanze
      </p>
      <h1 class="mb-8 text-5xl md:text-7xl font-serif drop-shadow-lg leading-tight">
        <img src="/residenza-angelica-logo.svg" alt="Residenza Angelica Logo" class="w-[1000px] mx-auto" />
        <span class="text-7xl md:text-7xl">SUL LAGO DI GARDA</span>
      </h1>
      <div class="flex flex-col md:flex-row gap-4 justify-center mt-8">
        <a
          href={buildPageUrl('contacts', $language)}
          class="btn btn-primary btn-wide rounded-none border-none text-white font-bold hover:scale-105 transition-transform uppercase tracking-wider"
        >
          Richiedi Preventivo
        </a>
        <a
          href={buildPageUrl('rooms', $language)}
          class="btn btn-primary btn-wide rounded-none border-none text-white font-bold hover:scale-105 transition-transform uppercase tracking-wider"
        >
          Vedi Le Camere
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Welcome Section -->
<section class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row gap-12 items-center">
      <div class="lg:w-1/2 text-center lg:text-left">
        <h4 class="text-primary uppercase tracking-widest text-sm font-bold mb-2">
          Bed & Breakfast
        </h4>
        <h2 class="text-4xl md:text-5xl font-serif mb-8 text-neutral">
          Benvenuti a Residenza Angelica
        </h2>
        <p class="text-lg text-neutral/80 leading-relaxed mb-6 font-sans">
          Immersa nella tranquillità del Lago di Garda, Residenza Angelica offre un'esperienza unica
          di relax e comfort. La nostra struttura è il punto di partenza ideale per esplorare le
          bellezze del territorio o semplicemente per godersi una pausa rigenerante.
        </p>
        <p class="text-lg text-neutral/80 leading-relaxed font-sans">
          Ogni dettaglio è curato per garantirvi un soggiorno indimenticabile, dalle nostre
          colazioni ricche e genuine alla pulizia impeccabile delle camere.
        </p>
      </div>
      <div class="lg:w-1/2">
        <img
          src="https://placehold.co/800x600"
          alt="Residenza Angelica Pool"
          class="w-full h-auto shadow-2xl rounded-sm"
        />
      </div>
    </div>
  </div>
</section>

<!-- Rooms Section -->
<section class="py-20 bg-base-200/50">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h4 class="text-accent uppercase tracking-widest text-sm font-bold mb-2">
        Cosa Puoi Trovare Da Noi
      </h4>
      <h2 class="text-4xl md:text-5xl font-serif text-neutral">Le nostre camere</h2>

      <!-- Icons Row -->
      <div class="flex justify-center flex-wrap gap-8 my-10 text-neutral/70">
        <div class="flex flex-col items-center gap-2">
          <span class="text-3xl">📶</span>
          <span class="text-xs uppercase">Wifi Free</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-3xl">❄️</span>
          <span class="text-xs uppercase">Aria Condiz.</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-3xl">🛏️</span>
          <span class="text-xs uppercase">Letti Comodi</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-3xl">📺</span>
          <span class="text-xs uppercase">TV Sat</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-3xl">🅿️</span>
          <span class="text-xs uppercase">Parcheggio</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Room 1 -->
      <div class="card bg-base-100 shadow-xl rounded-none hover:shadow-2xl transition-shadow group">
        <figure class="relative overflow-hidden h-64">
          <img
            src="https://placehold.co/600x400"
            alt="Camera Doppia Standard"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div
            class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <span class="font-bold">Comfort & Style</span>
          </div>
        </figure>
        <div class="card-body p-8">
          <h3 class="card-title font-serif text-2xl mb-2">Camera Doppia Standard</h3>
          <div class="flex gap-4 text-sm text-neutral/60 mb-4">
            <span>👥 2 Ospiti</span>
            <span>📐 20 m²</span>
          </div>
          <p class="text-neutral/80 mb-6 line-clamp-3">
            Una camera accogliente e luminosa, arredata con gusto classico e dotata di tutti i
            comfort moderni.
          </p>
          <div class="card-actions">
            <button
              class="btn btn-primary text-white rounded-none w-full uppercase text-xs font-bold tracking-widest"
              >Prenota o Richiedi Info</button
            >
          </div>
        </div>
      </div>

      <!-- Room 2 -->
      <div class="card bg-base-100 shadow-xl rounded-none hover:shadow-2xl transition-shadow group">
        <figure class="relative overflow-hidden h-64">
          <img
            src="https://placehold.co/600x400"
            alt="Camera Matrimoniale Luxury"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </figure>
        <div class="card-body p-8">
          <h3 class="card-title font-serif text-2xl mb-2">Camera Matrimoniale Luxury</h3>
          <div class="flex gap-4 text-sm text-neutral/60 mb-4">
            <span>👥 2 Ospiti</span>
            <span>📐 30 m²</span>
          </div>
          <p class="text-neutral/80 mb-6 line-clamp-3">
            Eleganza e spazio si fondono in questa soluzione esclusiva per coppie che cercano il
            meglio.
          </p>
          <div class="card-actions">
            <button
              class="btn btn-primary text-white rounded-none w-full uppercase text-xs font-bold tracking-widest"
              >Prenota o Richiedi Info</button
            >
          </div>
        </div>
      </div>

      <!-- Room 3 -->
      <div class="card bg-base-100 shadow-xl rounded-none hover:shadow-2xl transition-shadow group">
        <figure class="relative overflow-hidden h-64">
          <img
            src="https://placehold.co/600x400"
            alt="Camera Quadrupla Luxury"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </figure>
        <div class="card-body p-8">
          <h3 class="card-title font-serif text-2xl mb-2">Camera Quadrupla Luxury</h3>
          <div class="flex gap-4 text-sm text-neutral/60 mb-4">
            <span>👥 4 Ospiti</span>
            <span>📐 45 m²</span>
          </div>
          <p class="text-neutral/80 mb-6 line-clamp-3">
            Ideale per famiglie, offre ampi spazi separati e finiture di pregio per una vacanza
            senza pensieri.
          </p>
          <div class="card-actions">
            <button
              class="btn btn-primary text-white rounded-none w-full uppercase text-xs font-bold tracking-widest"
              >Prenota o Richiedi Info</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Services/Food Section -->
<section class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row gap-16 items-center">
      <div class="lg:w-1/3">
        <h4 class="text-primary uppercase tracking-widest text-sm font-bold mb-2">
          Comfort & Cucina
        </h4>
        <h2 class="text-4xl font-serif mb-8 text-neutral">Cosa offriamo</h2>
        <p class="text-neutral/80 mb-10">
          La giornata inizia con il profumo del caffè e dei dolci fatti in casa.
        </p>

        <div class="grid grid-cols-2 gap-y-8 gap-x-4">
          <div
            class="flex flex-col items-center text-center p-4 border border-base-200 hover:border-primary transition-colors"
          >
            <span class="text-4xl mb-2">🍳</span>
            <span class="font-bold text-sm">Colazione Ricca</span>
          </div>
          <div
            class="flex flex-col items-center text-center p-4 border border-base-200 hover:border-primary transition-colors"
          >
            <span class="text-4xl mb-2">☕</span>
            <span class="font-bold text-sm">Caffetteria</span>
          </div>
          <div
            class="flex flex-col items-center text-center p-4 border border-base-200 hover:border-primary transition-colors"
          >
            <span class="text-4xl mb-2">🧹</span>
            <span class="font-bold text-sm">Pulizia Giornaliera</span>
          </div>
          <div
            class="flex flex-col items-center text-center p-4 border border-base-200 hover:border-primary transition-colors"
          >
            <span class="text-4xl mb-2">🚲</span>
            <span class="font-bold text-sm">Noleggio Bici</span>
          </div>
        </div>
      </div>

      <div class="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src="https://placehold.co/600x600"
          alt="Breakfast"
          class="w-full h-80 object-cover shadow-lg rounded-sm"
        />
        <img
          src="https://placehold.co/600x601"
          alt="Nature"
          class="w-full h-80 object-cover shadow-lg rounded-sm mt-8 md:mt-0"
        />
      </div>
    </div>
  </div>
</section>

<!-- Discover Section -->
<section class="py-20 bg-white text-center">
  <div class="container mx-auto px-4 max-w-4xl">
    <h4 class="text-primary uppercase tracking-widest text-sm font-bold mb-2">Comfort & Natura</h4>
    <h2 class="text-4xl md:text-5xl font-serif mb-8 text-neutral">
      Scopri il Lago di Garda, i suoi tesori e non solo...
    </h2>
    <p class="text-xl text-neutral/60 italic font-serif">
      "Un luogo incantato dove il tempo sembra essersi fermato, per regalarti emozioni uniche."
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12 text-neutral/80">
      <p>
        <strong>Sport & Natura:</strong> Per chi ama lo sport, il Lago di Garda offre infinite possibilità:
        dal windsurf alla mountain bike, dalle passeggiate panoramiche al golf.
      </p>
      <p>
        <strong>Arte & Storia:</strong> Borghi antichi, castelli medievali e musei ricchi di fascino
        vi aspettano per raccontarvi la storia di questo territorio magico.
      </p>
    </div>
  </div>
</section>
