<script lang="ts">
  import { language } from '../stores/language';
  import { t } from '../lib/i18n';
</script>

<footer class="bg-primary text-primary-content py-12 mt-16 font-sans">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <!-- Brand -->
      <div>
        <h3 class="font-bold text-lg mb-4 text-white flex items-center gap-2">
          <img src="/favicon.png" alt="Logo" class="w-8 h-8 brightness-0 invert" />
          Residenza Angelica
        </h3>
        <p class="text-sm opacity-90">
          Luxury accommodation with premium services and unforgettable experiences.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="font-bold mb-4 uppercase tracking-widest text-sm">{t($language, 'nav.home')}</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="/" class="link link-hover hover:text-white/80 transition-colors"
              >{t($language, 'nav.home')}</a
            >
          </li>
          <li>
            <a href="/rooms" class="link link-hover hover:text-white/80 transition-colors"
              >{t($language, 'nav.rooms')}</a
            >
          </li>
          <li>
            <a href="/gallery" class="link link-hover hover:text-white/80 transition-colors"
              >{t($language, 'nav.gallery')}</a
            >
          </li>
          <li>
            <a href="/services" class="link link-hover hover:text-white/80 transition-colors"
              >{t($language, 'nav.services')}</a
            >
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h4 class="font-bold mb-4 uppercase tracking-widest text-sm">
          {t($language, 'contact.title')}
        </h4>
        <ul class="space-y-2 text-sm">
          <li>📞 +39-123-456-7890</li>
          <li>📧 info@residenza-angelica.it</li>
          <li>📍 Via Example 123, City</li>
          <li>🕐 24/7 Available</li>
        </ul>
      </div>

      <!-- Follow Us -->
      <div>
        <h4 class="font-bold mb-4 uppercase tracking-widest text-sm">Follow Us</h4>
        <div class="flex gap-4">
          <a
            href="#"
            class="btn btn-circle btn-sm btn-outline text-white border-white hover:bg-white hover:text-primary"
            >f</a
          >
          <a
            href="#"
            class="btn btn-circle btn-sm btn-outline text-white border-white hover:bg-white hover:text-primary"
            >𝕏</a
          >
          <a
            href="#"
            class="btn btn-circle btn-sm btn-outline text-white border-white hover:bg-white hover:text-primary"
            >📷</a
          >
        </div>
      </div>
    </div>

    <div class="divider before:bg-white/20 after:bg-white/20 my-4" />

    <!-- Bottom Footer -->
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
      <div>
        <p>&copy; 2024 Residenza Angelica. {t($language, 'footer.rights')}</p>
      </div>
      <div class="flex gap-4">
        <a href="#" class="link link-hover">{t($language, 'footer.policy')}</a>
        <a href="#" class="link link-hover">{t($language, 'footer.terms')}</a>
        <a href="#" class="link link-hover">{t($language, 'footer.sitemap')}</a>
      </div>
    </div>
  </div>
</footer>
