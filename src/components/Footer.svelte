<script lang="ts">
	import { language } from '../stores/language';
	import { t } from '../lib/i18n';
</script>

<footer class="bg-base-300 text-base-content py-12 mt-16">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
			<!-- Brand -->
			<div>
				<h3 class="font-bold text-lg mb-4 text-primary">🏩 Residenza Angelica</h3>
				<p class="text-sm opacity-80">
					Luxury accommodation with premium services and unforgettable experiences.
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="font-bold mb-4">{t($language, 'nav.home')}</h4>
				<ul class="space-y-2 text-sm">
					<li><a href="/" class="link link-hover">{t($language, 'nav.home')}</a></li>
					<li><a href="/rooms" class="link link-hover">{t($language, 'nav.rooms')}</a></li>
					<li><a href="/gallery" class="link link-hover">{t($language, 'nav.gallery')}</a></li>
					<li><a href="/services" class="link link-hover">{t($language, 'nav.services')}</a></li>
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h4 class="font-bold mb-4">{t($language, 'contact.title')}</h4>
				<ul class="space-y-2 text-sm">
					<li>📞 +39-123-456-7890</li>
					<li>📧 info@residenza-angelica.it</li>
					<li>📍 Via Example 123, City</li>
					<li>🕐 24/7 Available</li>
				</ul>
			</div>

			<!-- Follow Us -->
			<div>
				<h4 class="font-bold mb-4">Follow Us</h4>
				<div class="flex gap-4">
					<a href="#" class="btn btn-circle btn-sm btn-ghost">f</a>
					<a href="#" class="btn btn-circle btn-sm btn-ghost">𝕏</a>
					<a href="#" class="btn btn-circle btn-sm btn-ghost">📷</a>
				</div>
			</div>
		</div>

		<div class="divider my-4" />

		<!-- Bottom Footer -->
		<div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
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
